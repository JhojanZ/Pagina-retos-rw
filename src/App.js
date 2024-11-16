import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/paginas/Retos">Retos</Link></li>
          <li><Link to="/paginas/Pasajes">Pasajes</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;