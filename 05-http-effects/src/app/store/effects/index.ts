
// ToDo: Nota , este archivo contiene todos los efectos

import { UsuariosEffects } from './usuarios.effects';
import { UsuarioEffects } from './usuario.effects';

// Efectos Autorizados , este array va en la configuracion del effec en app.module
export const AuthEffects: any[] = [ UsuariosEffects, UsuarioEffects ];


export * from './usuarios.effects';
