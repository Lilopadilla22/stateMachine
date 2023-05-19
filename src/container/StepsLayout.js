import React from 'react';
import { Welcome } from '../Components/Welcome';
import { Search } from '../Components/Search';
import { Tickets } from '../Components/Tickets';

import './styles.css';
import { Passengers } from '../Components/Passengers';


/**
 * @param {{ state: import("xstate").State, send: import("xstate").Interpreter["send"] }} props  
 */
export const StepsLayout = (props) => {
  const {state, send} = props 
  const renderContent = () => {
    if (state.matches('initial')) return <Welcome send={send}/>
    if (state.matches('search')) return <Search send={send} state={state} />
    if (state.matches('tickets')) return <Tickets send={send} state={state}/>
    if (state.matches('passengers')) return <Passengers send={send} state={state}/>
    return null   
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
}; 