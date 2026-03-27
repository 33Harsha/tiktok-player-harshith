import { useState, useRef, useEffect } from "react";
import VideoCard from "./components/VideoCard";
import videos from "./data/videos";
import "./index.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const feedRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "ArrowDown") {
        const next = (currentIndex + 1) % videos.length;
        setCurrentIndex(next);
        feedRef.current?.children[next]?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.code === "ArrowUp") {
        const prev = (currentIndex - 1 + videos.length) % videos.length;
        setCurrentIndex(prev);
        feedRef.current?.children[prev]?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
      <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
      <div className="feed-container" ref={feedRef}>
        {videos.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={index === currentIndex}
            onVisible={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;