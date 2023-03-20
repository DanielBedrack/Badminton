import React, { useState } from "react";
import Opponent from "./Opponent/Opponent";
import "./uploads.css";
import VideoUploader from "./VideoFile/VideoUploader";


const Uploads = () => {
  const [opponentStats, setOpponentStats] = useState({});
  
  return (
    <div className="uploads">
      <Opponent setOpponentStats={setOpponentStats} />
      <VideoUploader />
    </div>
  );
};

export default Uploads;
