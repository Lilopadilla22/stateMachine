import React from 'react';
import './Styles.css'

export const Welcome = ({ send }) => {
  
  const startBooking = () => {
    send('START');
  };

  return (
    <div className='Welcome'>
      <p className='Welcome-title title'>¡Hoy es el día!</p>
      <p className='Welcome-description description'>Compra tu vuelo y conoce un nuevo lugar del mundo, hay muchas maravillas por conocer.</p>
      <button onClick={startBooking} className='Welcome-cancel button'>Comenzar</button>
    </div>
  );
}; 