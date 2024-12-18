import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import Table from './Table';
import ContactForm from './ContactForm'; // Import the form component

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your data warehouse or API
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="summary-statistics">
        {/* Example summary statistics */}
        <div>Data Sources: 7</div>
        <div>Checks: 11</div>
        <div>Last Incident: 21 minutes ago</div>
        <div>Last Check: 9 minutes ago</div>
      </div>
      <div className="health-indicators">
        {/* Health indicators (e.g., green for success, red for failure) */}
        <div style={{ color: 'green' }}>ETL Process: Success</div>
        <div style={{ color: 'red' }}>Credit Card Files: Failure</div>
      </div>
      {/* Example table rendering fetched data */}
      <div className="data-table">
        <Table data={data} />
      </div>
      {/* Example usage of Chart */}
      <div className="chart-section">
        <Chart data={data} />
      </div>
      {/* Example usage of ContactForm */}
      <div className="contact-form-section">
        <ContactForm />
      </div>
    </div>
  );
}

export default Dashboard;
