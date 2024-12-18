import React from 'react';

function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Column1</th>
          <th>Column2</th>
          <th>Column3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
