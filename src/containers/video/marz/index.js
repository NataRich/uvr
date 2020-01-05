/* eslint-disable */
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Marzipano from 'marzipano';
let video;

// Create viewer.
// Video requires WebGL support.
export default (element) => {
    function VideoAsset(videoElement) {
        this._videoElement = null;
        this._destroyed = false;
        this._emitChange = this.emit.bind(this, 'change');
        this._lastTimestamp = -1;

        this._emptyCanvas = document.createElement('canvas');
        this._emptyCanvas.width = 1;
        this._emptyCanvas.height = 1;

        this.setVideo(videoElement);
    }

    Marzipano.dependencies.eventEmitter(VideoAsset);

    VideoAsset.prototype.setVideo = function (videoElement) {
        var self = this;

        if (this._videoElement) {
            this._videoElement.removeEventListener('timeupdate', this._emitChange);
        }

        this._videoElement = videoElement;

        if (!this._videoElement) {
            return;
        }

        this._videoElement.addEventListener('timeupdate', this._emitChange);

        // Emit a change event on every frame while the video is playing.
        // TODO: make the loop sleep when video is not playing.
        if (this._emitChangeIfPlayingLoop) {
            cancelAnimationFrame(this._emitChangeIfPlayingLoop);
            this._emitChangeIfPlayingLoop = null;
        }

        function emitChangeIfPlaying() {
            if (!self._videoElement.paused) {
                self.emit('change');
            }
            if (!self._destroyed) {
                self._emitChangeIfPlayingLoop = requestAnimationFrame(emitChangeIfPlaying);
            }
        }
        emitChangeIfPlaying();

        this.emit('change');
    };

    VideoAsset.prototype.width = function () {
        if (this._videoElement) {
            return this._videoElement.videoWidth;
        } else {
            return this._emptyCanvas.width;
        }
    };

    VideoAsset.prototype.height = function () {
        if (this._videoElement) {
            return this._videoElement.videoHeight;
        } else {
            return this._emptyCanvas.height;
        }
    };

    VideoAsset.prototype.element = function () {
        // If element is null, show an empty canvas. This will cause a transparent
        // image to be rendered when no video is present.
        if (this._videoElement) {
            return this._videoElement;
        } else {
            return this._emptyCanvas;
        }
    };

    VideoAsset.prototype.isDynamic = function () {
        return true;
    };

    VideoAsset.prototype.timestamp = function () {
        if (this._videoElement) {
            this._lastTimestamp = this._videoElement.currentTime;
        }
        return this._lastTimestamp;
    };

    VideoAsset.prototype.destroy = function () {
        this._destroyed = true;
        if (this._videoElement) {
            this._videoElement.removeEventListener('timeupdate', this._emitChange);
        }
        if (this._emitChangeIfPlayingLoop) {
            cancelAnimationFrame(this._emitChangeIfPlayingLoop);
            this._emitChangeIfPlayingLoop = null;
        }
    };
    let viewerOpts = { stageType: 'webgl' };
    let viewer = new Marzipano.Viewer(element, viewerOpts);

    // Create asset and source.
    let asset = new VideoAsset();
    let source = new Marzipano.SingleAssetSource(asset);

    // Create geometry.
    // This is a trivial equirectangular geometry with a single level.
    // The level size need not match the actual video dimensions because it is
    // only used to determine the most appropriate level to render, and no such
    // choice has to be made in this case.
    let geometry = new Marzipano.EquirectGeometry([{ width: 1 }]);

    // Create view.
    // We display the video at a fixed vertical fov.
    let limiter = Marzipano.RectilinearView.limit.vfov(90 * Math.PI / 180, 90 * Math.PI / 180);
    let view = new Marzipano.RectilinearView({ fov: Math.PI / 2 }, limiter);

    // Create scene.
    let scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view
    });

    // Display scene.
    scene.switchTo();

    // Start playback on click.
    // Playback cannot start automatically because most browsers require the play()
    // method on the video element to be called in the context of a user action.
    // document.addEventListener('click', tryStart);
    // document.addEventListener('touchstart', tryStart);

    // Whether playback has started.
    let started = false;

    // Try to start playback.
    function tryStart() {
        console.log('try start');
        if (started && video) {
           started = false;
           return asset.element().pause();
        } else if (video) {
            started = true;
            return asset.element().play();
        }
        started = true;
        video =  video || document.createElement('video');
        video.src = '/test.mp4';
        video.crossOrigin = 'anonymous';

        video.autoplay = true;
        video.loop = true;

        // Prevent the video from going full screen on iOS.
        video.playsInline = true;
        video.webkitPlaysInline = true;

        video.play();

        waitForReadyState(video, video.HAVE_METADATA, 100, function () {
            waitForReadyState(video, video.HAVE_ENOUGH_DATA, 100, function () {
                asset.setVideo(video);
            });
        });
    }

    // Wait for an element to reach the given readyState by polling.
    // The HTML5 video element exposes a `readystatechange` event that could be
    // listened for instead, but it seems to be unreliable on some browsers.
    function waitForReadyState(element, readyState, interval, done) {
        let timer = setInterval(function () {
            if (element.readyState >= readyState) {
                clearInterval(timer);
                done(null, true);
            }
        }, interval);
    }
    return asset;
}
