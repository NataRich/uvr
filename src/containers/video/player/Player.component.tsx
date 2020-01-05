import React from 'react';
import marz from '../marz';
import EventEmitter from '../marz/eventEmitter';
import { StyledPlayerContainer } from './Player.styles';

function formatTime(d: number) {
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);
  return (h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

function waitForReadyState(element: HTMLVideoElement, readyState: number, interval: number, done: any) {
  const timer = setInterval(() => {
    if (element.readyState >= readyState) {
      clearInterval(timer);
      done(null, true);
    }
  }, interval);
}

const Player: React.FC<IPlayerProps> = (props) => {
  const playerRef = React.createRef<HTMLDivElement>();
  const videoRef = React.createRef<HTMLVideoElement>();
  const progressBackgroundRef = React.createRef<HTMLDivElement>();

  const [player, setPlayer] = React.useState(null) as any;
  const [paused, setPaused] = React.useState(true);
  const [videoEmitter, setVideoEmitter] = React.useState(null) as any;
  const [progress, setProgress] = React.useState(0);
  const [mute, setMute] = React.useState(false);

  const onPlayPauseClick = React.useCallback(() => {
    if (!player) {
      const playerInstance = (marz as any)(playerRef.current);
      setPlayer(playerInstance);
      const video = document.createElement('video');
      video.src = props.videoSrc;
      video.crossOrigin = 'anonymous';
      video.autoplay = false;
      video.loop = true;

      // Prevent the video from going full screen on iOS.
      (video as any).playsInline = true;
      (video as any).webkitPlaysInline = true;

      waitForReadyState(video, video.HAVE_METADATA, 100, () => {
        waitForReadyState(video, video.HAVE_ENOUGH_DATA, 100, () => {
          playerInstance.setVideo(video);
          const _videoEmitter = new EventEmitter();
          setVideoEmitter(_videoEmitter);
          _videoEmitter.setObject(video);
          _videoEmitter.addEventListener('timeupdate', (ev: Event) => {
            setProgress(ev.timeStamp);
          });
          playerInstance.element().play();
          setPaused(false);
        });
      });
    } else {
      if (player.element().paused) {
        player.element().play();
        setPaused(false);
      } else {
        player.element().pause();
        setPaused(true);
      }
    }
  }, [player]);

  const onMuteClick = React.useCallback(() => {
    if (player) {
      setMute(!mute);
      player.element().volume = mute ? 1 : 0;
    }
  }, [player, mute]);

  const progressClick = React.useCallback(
    (evt) => {
      if (progressBackgroundRef.current) {
        const rect = progressBackgroundRef.current.getBoundingClientRect();
        const click = evt.clientX - rect.left;
        const total = rect.right - rect.left;
        player.element().currentTime = (click / total) * player.element().duration;
        // return click / total;
      }
    },
    [progressBackgroundRef, player],
  );

  return (
    <StyledPlayerContainer>
      <div className="pano" ref={playerRef} />
      {!player && <video src={props.videoSrc} ref={videoRef} style={{ width: '800px', height: '450px' }} />}
      <div className="video-controls" id="video-controls">
        <div className="control-btn play" id="play-pause" onClick={onPlayPauseClick}>
          {paused ? (
            <img className="play-icon" src="img/play.png" />
          ) : (
            <img className="pause-icon" src="img/pause.png" />
          )}
        </div>
        <div className="control-btn sound" id="mute" onClick={onMuteClick}>
          {!mute && <img className="sound-on" src="img/sound-on.png" />}
          {mute && <img className="sound-off" src="img/sound-off.png" />}
        </div>
        <div className="time">
          <h5 className="initial-time" id="current-time-indicator" style={{ margin: 0 }}>
            {player ? formatTime(player.element().currentTime) : '-'}
          </h5>
          <div
            className="progress-wrapper"
            id="progress-background"
            ref={progressBackgroundRef}
            onClick={progressClick}
          >
            <div className="progress-bar">
              <span
                className="progress-fill"
                id="progress-fill"
                style={{
                  width: player ? (player.element().currentTime / player.element().duration) * 100 + '%' : '0',
                }}
              />
            </div>
          </div>
          <h5 className="end-time" id="duration-indicator" />
        </div>
      </div>
    </StyledPlayerContainer>
  );
};

export default Player;
