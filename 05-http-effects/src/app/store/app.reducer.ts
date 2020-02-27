// Aqui va lo que se va a importar al store module

import * as reducers from './reducers';
import {ActionReducerMap} from '@ngrx/store';

// ToDo 6. Como queremos que luzca el store que se enviara a la configuracion en app.module
export interface AppState {
  usuarios: reducers.UsuariosState;
}

// ToDo 7. Crear el action Reducer map que es la combinacion de todos los reducer que utilizan la interface del AppState
export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer
};


