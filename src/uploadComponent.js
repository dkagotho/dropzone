import React, { useState, useRef } from "react";
import "./uploadComponent.css";

const UploadComponent = () => {
  const [files, setFiles] = useState([]);
  const [custodian, setCustodian] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const fileList = event.target.files;
    const newFiles = Array.from(fileList);
    setFiles(newFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const fileList = event.dataTransfer.files;
    const newFiles = Array.from(fileList);
    setFiles(newFiles);
  };

  const handleCustodianChange = (event) => {
    const value = event.target.value;
    setCustodian(value);
  };

  const handleUpload = () => {
    setUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress > 100) {
        clearInterval(interval);
        setFiles([]);
        setCustodian("");
        setUploading(false);
      }
    }, 500);
  };

  return (
    <div
      className="dropzone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()}
    >
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      {files.length > 0 && !uploading && (
        <div className="custodian-input">
          <label htmlFor="custodian">Custodian:</label>
          <input
            type="text"
            id="custodian"
            value={custodian}
            onChange={handleCustodianChange}
          />
          <button onClick={handleUpload}>Submit</button>
        </div>
      )}
      {uploading && (
        <div className="upload-progress">
          <div className="progress-bar" style={{ width: "100%" }}></div>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
