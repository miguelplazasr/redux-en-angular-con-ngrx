
// Accion : describe lo que el reducer tiene que hacer y es ina interface
interface Action {
    type: string;
    payload?: any;
}

// const incrementadorAction: Action = {
//     type: 'INCREMENTAR'
// };

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
        // El reducer siempre debe devolver un estado
        default:
            return state;
    }




}

//Uso del reducer

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};


// El reducer se envia el estado actual y la accion que quiero ejecutar
console.log(reducer( 10, incrementadorAction )); //  resultado 11

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

console.log( reducer(10, decrementadorAction));


const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

console.log( reducer(10, multiplicarAction));

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

console.log( reducer(10, dividirAction));

