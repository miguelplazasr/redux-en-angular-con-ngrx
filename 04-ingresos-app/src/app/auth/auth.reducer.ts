
import * as fromAuth from './auth.actions';
import {UserModel} from './user.model';

export interface AuthState {
  user: UserModel;
}

//Se inicializa el estado
const estadoInicial: AuthState = {
  user: null
};


export function authReducer( state = estadoInicial, action: fromAuth.actions): AuthState {

  switch ( action.type) {

    case fromAuth.SET_USER:
      return {
        user: { ...action.user }
      };

    case fromAuth.UNSET_USER:
      return {
        user: null
      };


    default:
      return state;
  }
}
