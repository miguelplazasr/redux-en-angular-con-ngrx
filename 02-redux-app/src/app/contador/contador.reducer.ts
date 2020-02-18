/**
 * El reducer se linstan todas las acciones que se quieran hacer con los estados
 */

// Las siguientes dos lineas significan lo mismo, pero la segunda importa todas las clases de una sola vez
// import {actions, DECREMENTAR, DIVIDIR, INCREMENTAR, MULTIPLICAR, RESET} from './contador.actions';
import * as fromContador from './contador.actions';


export function contadorReducer( state: number = 10, action: fromContador.actions) {

  switch ( action.type ) {

    case fromContador.INCREMENTAR:
    return ++ state;

    case fromContador.DECREMENTAR:
      return -- state;

    case fromContador.MULTIPLICAR:
      return state * action.payload ;

    case fromContador.DIVIDIR:
      return state / action.payload;

    case fromContador.RESET:
      return 0;

    default:
      return state;
  }
}
