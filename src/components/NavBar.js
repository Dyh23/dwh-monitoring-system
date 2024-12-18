import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/data-warehouse">Data Warehouse</Link></li>
        <li><Link to="/user-management">User Management</Link></li>
        <li><Link to="/etl-status">ETL Status</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
