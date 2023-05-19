import React from 'react'
import { useMachine } from '@xstate/react'
import bookingMachine from '../Machines/bookingMachine'
import { Nav } from '../Components/Nav'
import { StepsLayout } from './StepsLayout'

const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine)

  console.log("Mi maquina", state.value, state.context)

  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send}/>
      <StepsLayout send={send} state={state} />
    </div>
  )
}

export default BaseLayout
