

import {UsuarioModel} from '../../models/usuario.model';
import * as fromUsuario from '../actions'; // Contiene todos ls export del index.ts de actiosn

export interface UsuarioState {
  user: UsuarioModel;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const InitState: UsuarioState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function usuarioReducer( state = InitState, actions: fromUsuario.usuarioActions ): UsuarioState {

  switch ( actions.type ) {

    case fromUsuario.CARGAR_USUARIO:
      return {
        ...state,
        loading: true,
        error: null
      };

    case fromUsuario.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: { ...actions.usuario}
      };

    case fromUsuario.CARGAR_USUARIO_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        // error: actions.payload // Se recibe el objeto del error completo que tiene mucha informacion y se cambia por la siguiente linea
        error: {
          status: actions.payload.status,
          message: actions.payload.message,
          url: actions.payload.url
        }
      };


    default:
      return state;
  }

}
