import React, { useState } from 'react';
import './Login.css';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, loginRequest } from '../config/authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

function Login() {
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const loginResponse = await msalInstance.loginPopup(loginRequest);
      const account = loginResponse.account;
      const department = account.idTokenClaims.department; // Get department from Azure AD claims

      // Redirect user based on department
      switch (department) {
        case 'Super Admin':
          window.location.href = '/super-admin';
          break;
        case 'Unit ID Admin':
          window.location.href = '/unit-id-admin';
          break;
        case 'Data Warehouse Admin':
          window.location.href = '/data-warehouse-admin';
          break;
        case 'Data Center Admin':
          window.location.href = '/data-center-admin';
          break;
        case 'Management Information System Admin':
          window.location.href = '/mis-admin';
          break;
        default:
          window.location.href = '/';
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <h1 className="system-title">DATA WAREHOUSE MONITORING SYSTEM</h1>
      </div>
      <div className="right-section">
        <div className="login-container">
          <div className="login-form">
            <img src="/logo.jpg" alt="Logo" className="login-logo" />
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit">Login</button>
            </form>
            <div className="login-links">
              <a href="#">I forgot my password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
