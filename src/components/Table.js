import React from 'react';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.label}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;