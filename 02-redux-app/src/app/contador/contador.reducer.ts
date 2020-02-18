/**
 * El reducer se linstan todas las acciones que se quieran hacer con los estados
 */

import {actions, DECREMENTAR, DIVIDIR, INCREMENTAR, MULTIPLICAR, RESET} from './contador.actions';


export function contadorReducer( state: number = 10, action: actions) {

  switch ( action.type ) {

    case INCREMENTAR:
    return ++ state;

    case DECREMENTAR:
      return -- state;

    case MULTIPLICAR:
      return state * action.payload ;

    case DIVIDIR:
      return state / action.payload;

    case RESET:
      return 0;

    default:
      return state;
  }
}
