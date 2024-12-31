// main.jsx or index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // Use BrowserRouter if desired
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>  {/* Wrap the app here */}
            <App />
        </HashRouter>
    </React.StrictMode>
);
