import React, { useEffect, useState } from 'react';
import './Pasajes.css';

function Pasajes() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch('/data/dataPasajes.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleCardClick = (item) => {
    setSelectedCard(item.id === selectedCard?.id ? null : item);
  };

  return (
    <div className="pasajes-contenedor">
      {data.map(item => (
        <div
          key={item.id}
          className={`carta ${selectedCard?.id === item.id ? 'carta-seleccionada' : ''}`}
          onClick={() => handleCardClick(item)}
        >
          <img src={item.image} alt="Singular" className="carta-imagen" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {selectedCard?.id === item.id && (
            <div className="descripcion-expandida">
              <ul>
                {item.retos.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pasajes;