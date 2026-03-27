import { useState } from "react";

function UserInfo({ video }) {
  const [expanded, setExpanded] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className="user-info">
      {/* Avatar + Follow Button */}
      <div className="avatar-container">
        <img
          src={video.user.avatar}
          alt={video.user.name}
          className="avatar"
        />
        <button
          className={`follow-btn ${following ? "following" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setFollowing(!following);
          }}
        >
          {following ? "✓" : "+"}
        </button>
      </div>

      {/* Username */}
      <p className="username">@{video.user.name}</p>

      {/* Description */}
      <p className="description">
        {expanded
          ? video.description
          : video.description.slice(0, 60) + (video.description.length > 60 ? "..." : "")}
        {video.description.length > 60 && (
          <span
            className="more-btn"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? " less" : " more"}
          </span>
        )}
      </p>
    </div>
  );
}

export default UserInfo;