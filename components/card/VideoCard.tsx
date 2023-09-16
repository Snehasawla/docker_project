"use client";
import YouTube, { YouTubeProps } from "react-youtube";

const VideoCard = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "900",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="d-flex align-content-center m-10 background-white">
      <YouTube videoId="YJ57LnhQqsI" opts={opts} onReady={onPlayerReady} />;
    </div>
  );
};

export default VideoCard;
