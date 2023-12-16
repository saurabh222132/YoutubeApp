import React, { useEffect } from "react";

const VideoPlayer = ({ videoId }) => {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = createPlayer;

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, [videoId]);

  const createPlayer = () => {
    new window.YT.Player("player", {
      height: "360",
      width: "640",
      videoId: videoId,
    });
  };

  return <div id="player"></div>;
};

export default VideoPlayer;
