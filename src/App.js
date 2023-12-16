import React from "react";

import VideoPlayer from "./component/VideoPlayer";

function App() {
  // const API_KEY = "AIzaSyAlbnAZyahVj7_rH9ap-isnGdaZFTUWx6E";
  // const VIDEO_ID = 'WBQ2VV-IlCQ';
  const API_KEY = `${process.env.REACT_APP_YOUR_API_KEY}`;
  const VIDEO_ID = "WBQ2VV-IlCQ";
  return (
    <div className="App">
      <h1>Custom YouTube Video Player</h1>
      <VideoPlayer apiKey={API_KEY} videoId={VIDEO_ID} />
    </div>
  );
}

export default App;
