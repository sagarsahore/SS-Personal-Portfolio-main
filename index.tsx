import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Critical error during React mount:", error);
  document.body.innerHTML = `<div style="color:red; padding:40px; text-align:center; background:#111; height:100vh; font-family:sans-serif;">
    <h1>Mount Error</h1>
    <p>The application failed to initialize.</p>
    <pre style="margin-top:20px; color:#faa;">${error}</pre>
  </div>`;
}
