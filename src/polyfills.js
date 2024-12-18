/* eslint-disable no-use-before-define */
if (typeof global === 'undefined') {
    var global = window;
  }
  /* eslint-enable no-use-before-define */
  
  if (typeof process === 'undefined') {
    global.process = {
      env: {
        NODE_ENV: 'production',
        REACT_APP_AZURE_CLIENT_ID: '5fb7be9f-d232-4749-bd46-6b31b936cd4a',
        REACT_APP_AZURE_CLIENT_SECRET: 'REMOVED_SECRET1',
        REACT_APP_AZURE_TENANT_ID: 'cf7ab273-e057-4842-a540-4ef1c7f105ac',
        REACT_APP_DATABASE_URL: 'postgresql://postgres:Achim@5187@localhost:5432/dwh_monitoring_system',
      },
      browser: true,
      cwd: () => '/', // Adding a mock function for cwd
    };
  }
  