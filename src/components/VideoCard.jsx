import { useEffect, useRef, useState } from "react";
import ActionBar from "./ActionBar";
import UserInfo from "./UserInfo";
import MusicDisc from "./MusicDisc";

function VideoCard({ video, isActive, onVisible }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [iconType, setIconType] = useState("▶️");
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showHeart, setShowHeart] = useState(false);
  const [liked, setLiked] = useState(false);
  const longPressTimer = useRef(null);
  const tapTimer = useRef(null);
  const tapCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(); },
      { threshold: 0.7 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [onVisible]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [isActive]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!isActive) return;
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isActive, playing]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
      setIconType("⏸️");
    } else {
      videoRef.current.play();
      setPlaying(true);
      setIconType("▶️");
    }
    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 800);
  };

  // Single tap vs double tap
  const handleTap = () => {
    tapCount.current += 1;
    if (tapTimer.current) clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => {
      if (tapCount.current === 1) togglePlay();
      if (tapCount.current >= 2) handleDoubleTap();
      tapCount.current = 0;
    }, 250);
  };

  // Double tap to like
  const handleDoubleTap = () => {
    setShowHeart(true);
    setLiked(true);
    setTimeout(() => setShowHeart(false), 1000);
  };

  // Long press to pause
  const handleMouseDown = () => {
    longPressTimer.current = setTimeout(() => {
      if (videoRef.current) { videoRef.current.pause(); setPlaying(false); }
    }, 500);
  };

  const handleMouseUp = () => {
    clearTimeout(longPressTimer.current);
    if (!playing && isActive) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (vid) setProgress((vid.currentTime / vid.duration) * 100);
  };

  return (
    <div
      className="video-card"
      onClick={handleTap}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* Loading Skeleton */}
      {loading && <div className="skeleton" />}

      <video
        ref={videoRef}
        src={video.url}
        loop
        muted={muted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={() => setLoading(false)}
        className="video-element"
      />

      {/* Play/Pause Icon */}
      {showIcon && <div className="play-icon-overlay">{iconType}</div>}

      {/* Double Tap Heart */}
      {showHeart && <div className="heart-overlay">❤️</div>}

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Mute Button */}
      <button
        className="mute-btn"
        onClick={(e) => { e.stopPropagation(); setMuted(!muted); }}
      >
        {muted ? "🔇" : "🔊"}
      </button>

      {/* Action Bar */}
      <ActionBar video={video} externalLiked={liked} onLike={() => setLiked(!liked)} />

      {/* User Info */}
      <UserInfo video={video} />

      {/* Music Disc */}
      <MusicDisc music={video.music} playing={playing} avatar={video.user.avatar} />
    </div>
  );
}

export default VideoCard;