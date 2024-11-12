import React, { useState } from 'react';

function ContadorVocales() {

  const [texto, setTexto] = useState('');


  const contarVocales = (cadena) => {
    const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
    let contador = 0;

    for (let char of cadena) {
      if (vocales.includes(char)) {
        contador++;
      }
    }

    return contador;
  };

  const manejarClick = () => {
    const cantidadVocales = contarVocales(texto);
    alert(`Cantidad de vocales ingresadas: ${cantidadVocales}`);
  };

  return (
    <div>
      <h1>Contador de Vocales</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Ingresa texto aquí"
      />
      <button onClick={manejarClick}>Contar Vocales</button>
    </div>
  );
}

export default ContadorVocales;
