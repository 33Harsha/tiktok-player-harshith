import { useState, useEffect } from "react";

function ActionBar({ video, externalLiked, onLike }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(video.likes);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (externalLiked && !liked) {
      setLiked(true);
      setLikes((l) => l + 1);
    }
  }, [externalLiked]);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
    onLike();
  };

  return (
    <div className="action-bar">
      <div className="action-item">
        <button className="action-btn" onClick={handleLike}>
          {liked ? "❤️" : "🤍"}
        </button>
        <span className="action-count">{likes.toLocaleString()}</span>
      </div>
      <div className="action-item">
        <button className="action-btn" onClick={(e) => e.stopPropagation()}>💬</button>
        <span className="action-count">{video.comments}</span>
      </div>
      <div className="action-item">
        <button className="action-btn" onClick={(e) => e.stopPropagation()}>↗️</button>
        <span className="action-count">{video.shares}</span>
      </div>
      <div className="action-item">
        <button className="action-btn" onClick={(e) => { e.stopPropagation(); setBookmarked(!bookmarked); }}>
          {bookmarked ? "🔖" : "🏷️"}
        </button>
      </div>
    </div>
  );
}

export default ActionBar;