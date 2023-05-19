import React from 'react'
import { useMachine } from '@xstate/react'
import bookingMachine from '../Machines/bookingMachine'
import { Nav } from '../Components/Nav'
import { StepsLayout } from './StepsLayout'



const BaseLayout = () => {

const [state, send] = useMachine(bookingMachine) 

console.log("Mi maquina", state)
console.log("matchesTrue", state.matches('initial'))
console.log("matchesFalse", state.matches('tickets'))
console.log("can", state.matches('FINISH'))

return (
    <div className='BaseLayout'>
      <Nav/>
      <StepsLayout send={send}/>
      
    </div>
  )
}

export default BaseLayout
