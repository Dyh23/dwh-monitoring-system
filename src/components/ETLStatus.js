import React, { useState, useEffect } from 'react';

function ETLStatus() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    // Fetch ETL status from API
    async function fetchStatus() {
      const response = await fetch('http://localhost:5000/api/etl-status');
      const result = await response.json();
      setStatus(result);
    }
    fetchStatus();
  }, []);

  return (
    <div>
      <h1>ETL Status Monitoring</h1>
      <ul>
        {status.map((etl, index) => (
          <li key={index}>{etl.name} - {etl.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default ETLStatus;
