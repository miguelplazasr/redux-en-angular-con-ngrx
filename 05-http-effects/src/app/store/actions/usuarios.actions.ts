
// ToDo: 1. Definicion de las acciones
import {Action} from '@ngrx/store';
import {UsuarioModel} from '../../models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios Fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios Success';

// ToDo: 2. Cleacion de las clases que permitan crear acciones
export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;

  constructor( public payload: any ) {}
}

export class CargarUsuariosSuccess implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;

  constructor( public usuarios: UsuarioModel[] ) {}
}

// ToDo: 3. Exportar los tipos validos que las acciones van a poder emitir
export type usuariosActions = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;
