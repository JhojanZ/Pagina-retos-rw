import React, { useEffect, useState } from 'react';
import './Retos.css';

function Retos() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch('/dataPasajes.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleCardClick = (item) => {
    setSelectedCard(item.id === selectedCard?.id ? null : item);
  };

  return (
    <div className="retos-contenedor">
      {data.map(item => (
        <div
          key={item.id}
          className={`carta ${selectedCard?.id === item.id ? 'carta-seleccionada' : ''}`}
          onClick={() => handleCardClick(item)}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {selectedCard?.id === item.id && (
            <div className="descripcion-expandida">
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Retos;