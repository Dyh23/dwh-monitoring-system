import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';

function DwhInterface() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    async function fetchData() {
      const response = await fetch('http://localhost:5000/api/data');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Warehouse Interface</h1>
      <div className="table-container">
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default DwhInterface;
