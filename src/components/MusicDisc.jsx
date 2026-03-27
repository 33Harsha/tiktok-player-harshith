function MusicDisc({ music, playing, avatar }) {
  return (
    <div className="music-disc-container">
      <div className={`music-disc ${playing ? "spinning" : ""}`}>
        <img src={avatar} alt="music" className="disc-img" />
      </div>
      <p className="music-name">🎵 {music}</p>
    </div>
  );
}

export default MusicDisc;