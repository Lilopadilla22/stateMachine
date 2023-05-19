import React from 'react';
import { Welcome } from '../Components/Welcome';
import { Search } from '../Components/Search';
import { Passengers } from '../Components/Passengers';
import { Tickets } from '../Components/Tickets';
import './styles.css';
import { State } from 'xstate';


export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    // if (state.match('initial')) return <Welcome send={send}/>




    return null   
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
}; 