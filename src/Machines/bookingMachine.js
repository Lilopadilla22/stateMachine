import { assign, createMachine } from 'xstate';

const bookingMachine = createMachine({
  id: 'buy plane tickets',
  initial: 'initial',
  context: {
    passengers: [],
    selectionCountry: []
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
          actions: assign({
            selectionCountry: (context, event) => event.selectionCountry
          }),
        },
        CANCEL: 'initial'
      }
    },
    passengers: {
      on: {
        DONE: 'tickets',
        CANCEL: 'initial',
        ADD: {
          target: 'passengers',
          actions: assign(
            (context, event) => context.passengers.push(event.newPassengers)
          )

        }
      }
    },
    tickets: {
      on: {
        FINISH: 'initial'
      }
    },
  }
},
{
  actions: {
    imprimirInicio: () => console.log("imprimir inicio"),
    imprimirEntrada: () => console.log("imprimir entrada a search"),
    imprimirSalida: () => console.log("imprimir salida del search")

  }
}
)

export default bookingMachine