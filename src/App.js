import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/paginas/Retos">Page 1</Link></li>
          <li><Link to="/paginas/Pasajes">Page 2</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;