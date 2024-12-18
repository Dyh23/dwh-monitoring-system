export const msalConfig = {
    auth: {
      clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
      authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`,
      redirectUri: 'http://localhost:3000'
    }
  };
  
  export const loginRequest = {
    scopes: ['user.read']
  };
  