
import {Action} from '@ngrx/store';
import {UsuarioModel} from '../../models/usuario.model';

export const CARGAR_USUARIO = '[Usuarios] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuarios] Cargar usuario Fail';
export const CARGAR_USUARIO_SUCCESS = '[Usuarios] Cargar usuario Success';

export class CargarUsuario implements Action {
  readonly type = CARGAR_USUARIO;

  constructor( public id: string) { }
}

export class CargarUsuarioFail implements Action {
  readonly type = CARGAR_USUARIO_FAIL;

  constructor( public payload: any ) {}
}

export class CargarUsuarioSuccess implements Action {
  readonly type = CARGAR_USUARIO_SUCCESS;

  constructor( public usuario: UsuarioModel ) {}
}

export type usuarioActions = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess;
