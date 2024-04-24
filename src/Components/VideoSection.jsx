import React, { useState, useEffect, useRef } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PauseIcon from '@mui/icons-material/Pause';
import "../Styles/video.css";



const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [pauseIcon, setPauseIcon] = useState(false);
  const [isplaybutton, setIspLayButton] = useState(true);
  const [isVolume, setIsVolume] = useState(true);
  const [timer, setTimer] = useState(0);

  const progressRef = useRef();


  const videoRef = useRef();
  const seekToPosition = (e) => {
    if (!videoRef.current) return;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickPos = (e.clientX - left) / width;
    if (clickPos < 0 || clickPos > 1 || isNaN(clickPos)) return;
    const durationMs = videoRef.current.duration * 1000;
    const newElapsedTimeMs = durationMs * clickPos;
    const newTimeSec = newElapsedTimeMs / 1000;
    videoRef.current.currentTime = newTimeSec;
    const newTimeMin = Math.floor(newTimeSec / 60);
    const newTimeSecRest = newTimeSec % 60;
    const newTimeStr = `${newTimeMin}:${newTimeSecRest < 10 ? "0" + newTimeSecRest : newTimeSecRest}`;
    setTimer(Math.floor(newTimeStr));
  };
  useEffect(() => {
    const onTimeUpdate = () => {
      const element = videoRef.current;
      if (!progressRef.current || !element) return;
  
      const { currentTime, duration } = element;
      const progress = (currentTime / duration) * 100;
      progressRef.current.style.width = `${progress}%`;
      setTimer(Math.floor(currentTime));
    };
  
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', onTimeUpdate);
    }
  
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', onTimeUpdate);
      }
    };
  }, []);
  
 

  const handlePlay = () => {
    const video = videoRef.current;
    if (isVolume) {
      video.muted = false; // Enable audio if volume is not muted
    } else {
      video.muted = true; // Mute the video if volume is muted
    }
    video.play();
    setIsPlaying(!isPlaying);
    setIspLayButton(!isplaybutton);
    setPauseIcon(!pauseIcon);
  };

  const handleToggleAudio = () => {
    setIsVolume(!isVolume);
    const video = videoRef.current;
    video.muted = !video.muted;
  };

  const handlePause = () => {
    videoRef.current.pause()
    setIsPlaying(!isPlaying)
    setPauseIcon(!pauseIcon);
    setIspLayButton(!isplaybutton);
  };

  return (
    <div className="pre-video-container">
      <div className="video-container">
        <video ref={videoRef} poster muted loop playsInline>
          <source
            src="https://files.codingninjas.com/hotstar-promo-1712578725.mp4"
            type="video/mp4"
          />
        </video>
        {isPlaying && (
          <div className="video-play-button" onClick={handlePlay}>
            <div className="pause-button">
              <PlayArrowIcon style={{ fontSize: "65px" }} />
            </div>
          </div>
        )}
        <div
          className="music-container"
          onClick={handleToggleAudio}
        >
          {isVolume ? (
            <VolumeUpIcon
              style={{
                maxWidth: "24px",
                minWidth: "24px",
                width: "24px",
                maxHeight: "24px",
                minHeight: "24px",
                height: "24px",
                cursor: "pointer",
              }}
            />
          ) : (
            <VolumeOffIcon
              style={{
                maxWidth: "24px",
                minWidth: "24px",
                width: "24px",
                maxHeight: "24px",
                minHeight: "24px",
                height: "24px",
                cursor: "pointer",
              }}
            />
          )}
        </div>
        <div className="video-controllers">
          <div className="play-button">
            {isplaybutton && (
              <div onClick={handlePlay} className="play2-button"></div>
            )}
            {pauseIcon && (
              <PauseIcon
                onClick={handlePause}
                style={{
                  width: "19px",
                }}
              />
            )}
          </div>
          <div className="scroll-bar">
          <div
  className="scroll-bar-inside"
  style={{
    height: "100%",
    backgroundColor: "white",
  }}
  ref={progressRef}
  onClick={seekToPosition}
>


              
            </div>
          </div>

          <div className="timer">{`0:${timer}`}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
