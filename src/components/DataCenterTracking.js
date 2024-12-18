import React, { useState, useEffect } from 'react';

function DataCenterTracking() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch file status from API
    async function fetchFiles() {
      const response = await fetch('http://localhost:5000/api/data-center-files');
      const result = await response.json();
      setFiles(result);
    }
    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Data Center File Tracking</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name} - {file.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataCenterTracking;
