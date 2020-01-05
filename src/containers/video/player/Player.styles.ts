import styled from 'styled-components';

export const StyledPlayerContainer = styled.div`
  .pano {
    position: absolute;
    /*
    top: 0px;
    left: 0px;
    */
    width: 100%;
    height: 100%;
  }

  /* General layout */

  .video-controls {
    position: absolute;
    /*
    bottom: 0;
    */
    width: 100%;
    color: #fff;
    overflow: hidden;
  }

  .control-btn,
  .time {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .video-controls {
    height: 40px;
  }
  .play,
  .sound,
  .options {
    width: 40px;
  }
  .resolution {
    width: 100px;
  }

  .play {
    left: 0;
  }
  .sound {
    left: 40px;
  }
  .options {
    right: 0;
  }
  .resolution {
    right: 40px;
  }

  .time {
    position: absolute;
    left: 80px;
    right: 0px;
  }

  /* Control button style (play, mute, options, resolution) */

  .control-btn {
    background-color: rgb(103, 115, 131);
    background-color: rgba(103, 115, 131, 0.8);
    cursor: pointer;
    transition: 0.3s all ease-in-out;
  }

  .control-btn:hover {
    background-color: rgb(78, 88, 104);
    background-color: rgba(78, 88, 104, 0.8);
  }

  /* Play, mute, options */

  .play img,
  .sound img,
  .options img {
    height: 66%;
    width: 66%;
    margin-top: 17%;
    margin-left: 17%;
  }

  /* Resolution button */
  .resolution {
    text-align: center;
    padding-top: 10px;
  }

  .resolution h4,
  .resolution img {
    display: inline-block;
    vertical-align: middle;
  }

  .resolution h4 {
    font-size: 14px;
  }

  .resolution img {
    height: 14px;
  }

  .resolution-changing-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.8em;
    background-color: rgb(58, 68, 84);
    font-size: 0.9em;
    color: #fff;
  }

  /* Progress bar */

  .initial-time,
  .progress-wrapper,
  .end-time {
    position: absolute;
  }

  .initial-time,
  .end-time {
    width: 50px;
  }

  .initial-time {
    left: 14px;
  }

  .end-time {
    right: 14px;
  }

  .progress-wrapper {
    left: 78px;
    right: 78px;
  }

  .initial-time,
  .end-time {
    text-align: center;
    top: 12px;
  }

  .progress-wrapper {
    padding: 15px 0;
    cursor: pointer;
  }

  .progress-bar {
    height: 10px;
    background-color: rgb(103, 115, 131);
    background-color: rgba(103, 115, 131, 0.8);
    border-radius: 20px;
  }

  .progress-wrapper .progress-fill {
    display: block;
    height: 100%;
    width: 0;
    background-color: #eee;
    border-radius: 20px;
  }

  .initial-time,
  .end-time {
    font-size: 14px;
  }

  .time {
    background-color: rgb(58, 68, 84);
    background-color: rgba(58, 68, 84, 0.8);
  }

  /* Modals */

  .resolution.selected,
  .options.selected {
    background-color: #29aae2;
  }

  .resolution-modal,
  .options-modal {
    position: absolute;
    bottom: 55px;
    border-radius: 3px;
    background-color: rgb(58, 68, 84);
    background-color: rgba(58, 68, 84, 0.8);
  }

  .resolution-modal {
    width: 84px;
    right: 48px;
  }

  .resolution-modal:after,
  .options-modal:after {
    content: "";
    position: absolute;
    top: 100%;
    width: 0;
    height: 0;
    margin-left: -8px;
    border-top: 8px solid rgb(58, 68, 84);
    border-top: 8px solid rgba(58, 68, 84, 0.8);
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }

  .resolution-modal:after {
    left: 50%;
  }

  .options-modal:after {
    right: 10px;
  }

  .resolution-modal li {
    padding: 5px 7px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
  }

  .resolution-modal li.selected {
    color: #29aae2;
  }

  .resolution-modal li:hover {
    background-color: #29aae2;
    color: #fff;
  }

  .resolution-modal-changing-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    padding-top: 1.8em;
    background-color: rgb(58, 68, 84);
  }

  .resolution-modal-changing-indicator .spinner {
    width: 20px;
    margin: auto;
    margin: 2em auto;
    font-size: 7px;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: spin 0.8s infinite linear;
    animation: spin 0.8s infinite linear;
  }

  @-webkit-keyframes spin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff,
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7),
        2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
    }
  }
  @keyframes spin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff,
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7),
        2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
    }
  }

  .options-modal {
    right: 5px;
    width: 200px;
    height: 120px;
    padding: 10px;
    color: #fff;
  }

  .options-modal,
  .options-modal select {
    font-size: 16px;
  }

  /* Show state */

  .play-icon {
    display: block;
  }
  .pause-icon {
    display: block;
  }
  /* .video-playing .play-icon {
    display: none;
  }
  .video-playing .pause-icon {
    display: block;
  } */

  .sound-on {
    display: block;
  }
  .sound-off {
    display: block;
  }
  .video-muted .sound-on {
    display: none;
  }
  .video-muted .sound-off {
    display: block;
  }

  .resolution-modal {
    transition: transform 0.5s;
    transform: translateY(200%);
    -webkit-transform: translateY(200%);
  }

  .resolution-select-open .resolution-modal {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  .options-modal {
    transition: transform 0.5s;
    transform: translateY(200%);
    -webkit-transform: translateY(200%);
  }

  .options-open .options-modal {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  .resolution-changing-indicator,
  .resolution-modal-changing-indicator {
    display: none;
  }

  .video-resolution-changing .resolution-changing-indicator,
  .video-resolution-changing .resolution-modal-changing-indicator {
    display: block;
  }
`;
