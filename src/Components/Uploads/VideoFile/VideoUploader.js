import React, { useEffect, useState } from "react";
import "./videoUploader.css";


const ProgressBar = ({ progress }) => {
  const barStyle = {
    width: `${progress}%`,
    backgroundColor: "#0074D9",
    height: "20px",
    borderRadius: "10px",
    transition: "width 0.3s ease-in-out",
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div style={barStyle}></div>
      <div style={{ marginTop: "5px" }}>{progress}%</div>
    </div>
  );
};

const VideoUploader = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(event) {
    const file = event.target.files[0];
    const allowedTypes = ["video/mp4", "video/webm", "video/ogg", "video/mkv"]; // Allowed video types
    if (allowedTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        setSelectedVideo(dataUrl);
        localStorage.setItem("videoUrl", dataUrl);

        // Upload the video
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/analysis", true);
        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(progress);
          }
        });
        xhr.upload.addEventListener("load", () => {
          console.log("Upload complete!");
        });
        xhr.upload.addEventListener("error", (event) => {
          console.error(`Upload failed: ${event}`);
        });
        xhr.send(file);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a video file (MP4, WebM, or Ogg).");
    }
  }

  useEffect(() => {
    setSelectedVideo(null);
  }, []);

  return (
    <div className="video-container">
      <p>Drag And Drop Your Game Video</p>
      <div className="upload-icon">
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
      </div>
      {selectedVideo == null ? (
        <div>
          <input type="file" onChange={handleFileChange} />
          {uploadProgress > 0 && <ProgressBar progress={uploadProgress} />}
        </div>
      ) : (
        <div className="uploaded-video">
          {selectedVideo && <video src={selectedVideo} controls />}
        </div>
      )}
    </div>
  );
};

export default VideoUploader;

