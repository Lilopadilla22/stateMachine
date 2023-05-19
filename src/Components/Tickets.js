import React from 'react';
import './Styles.css'

export const Tickets = ({ send, state }) => {

  const {context} = state
  const finish = () => {
    send('FINISH')
  };

  return (
    <div className='Tickets'>
      <p className='Tickets-description description'>Gracias por volar con Flying 💚</p>
      <div className='Tickets-ticket'>
        <div className='Tickets-country'>{context.selectionCountry}</div>
        <div className='Tickets-passengers'>
          <span>✈</span>
          {context.passengers.map((person, idx) => {
            return <p key={idx}>{person}</p>
          })}
        </div>
      </div>
      <button onClick={finish} className='Tickets-finalizar button'>Finalizar</button>
    </div>
  );
}; 