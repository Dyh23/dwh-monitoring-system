import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import DwhInterface from './components/DwhInterface';
import UserManagement from './components/UserManagement';
import ETLStatus from './components/ETLStatus';
import DataFetchingComponent from './components/DataFetchingComponent';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/*" 
            element={
              <>
                <header className="App-header">
                <h4 className="header-title">Data Warehouse Monitoring System</h4>
                <NavBar />
                  
                </header>
                <div className="content">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/data-warehouse" element={<DwhInterface />} />
                    <Route path="/user-management" element={<UserManagement />} />
                    <Route path="/etl-status" element={<ETLStatus />} />
                    <Route path="/reports" element={<DataFetchingComponent />} />
                  </Routes>
                </div>
                <footer className="footer">
                  <p>&copy; 2024 Data Warehouse Monitoring System</p>
                </footer>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
