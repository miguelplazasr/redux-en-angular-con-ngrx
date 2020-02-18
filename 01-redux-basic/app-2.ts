
import {Action} from "./ngrx-fake/ngrx";
import {
    incrementadorAction,
    decrementadorAction,
    multiplicarAction,
    dividirAction,
    resetAction
} from './contador/contador.actions'
/**
 * Un reducer es una funcion. Debe ser una funciona pura, es decir que se resuelva por el mismo, con el estado y la accion
 *
 * @param state : Es el estado anterior
 * @param action : Es el resultado del reducer o el nuevo estado
 */
function reducer( state = 10, action: Action ) {

    switch ( action.type ) {
        case 'INCREMENTAR':
            return ++state;
        case 'DECREMENTAR':
            return --state;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        // El reducer siempre debe devolver un estado
        default:
            return state;
    }




}

console.log(reducer( 10, incrementadorAction )); //  resultado 11
console.log( reducer(10, decrementadorAction));
console.log( reducer(10, multiplicarAction));
console.log( reducer(10, dividirAction));
console.log( reducer(10, resetAction));
