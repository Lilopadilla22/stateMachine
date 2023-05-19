import { assign, createMachine } from 'xstate';
import { fetchCountries } from '../utils/api';

const fillCountries = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions:  assign({countries: (context, event) => event.data})
        },
        onError: {
          target: 'failure',
          actions: {
            error: assign({error: 'Fallo'})
          }
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading'}
      }
    }
  }
}

const bookingMachine = createMachine({
  id: 'buy plane tickets',
  initial: 'initial',
  context: {
    passengers: [],
    selectionCountry: [],
    countries: [],
    error: ''
  },
  states: {
    initial: {
      on: {
        START: {
          target: "search",
          actions: "imprimirInicio"
        }
      }
    },
    search: {
      on: {
        CONTIUNE: {
          target: 'passengers',
          actions: assign({selectionCountry: (context, event) => event.selectionCountry}),
        },
        CANCEL: 'initial'
      },
      ...fillCountries
    },
    passengers: {
      on: {
        DONE: {
          target: "tickets",
          cond: "moreThanOnePassenger"
        },
        CANCEL: { 
          target: "initial", 
          actions: "cleanContext" 
        },
        ADD: {
          target: 'passengers',
          actions: assign((context, event) => context.passengers.push(event.newPassengers))
        }
      }
    },
    tickets: {
      after: {
        50000: {
          target: 'initial',
          actions: "cleanContext" 
        }
      },
      on: {
        FINISH: 'initial'
      }
    },
  }
},
{
  actions: {
    cleanContext: assign({
      selectionCountry: "",
      passengers: [],
    }),
  },
  guards: {
    moreThanOnePassenger: (context) => {
      return context.passengers.length > 0;
    }
  }
}
)

export default bookingMachine