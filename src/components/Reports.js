import React, { useState, useEffect } from 'react';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from API
    async function fetchReports() {
      const response = await fetch('http://localhost:5000/api/reports');
      const result = await response.json();
      setReports(result);
    }
    fetchReports();
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>{report.title} - {report.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
