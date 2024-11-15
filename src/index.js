import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Retos from './paginas/Retos';
import Pasajes from './paginas/Pasajes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/paginas/Retos" element={<Retos />} />
        <Route path="/paginas/Pasajes" element={<Pasajes />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();