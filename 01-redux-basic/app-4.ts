
import { Store, createStore } from 'redux';
import {contadorReducer} from "./contador/contador.reducer";
import {incrementadorAction} from "./contador/contador.actions";

// la funciona createStore ya regresa un store inicalizado
const store: Store = createStore( contadorReducer );

/**
 * Store es un observable
 */
store.subscribe( () => {
    console.log('Subs -> ', store.getState() )
} );


store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );


