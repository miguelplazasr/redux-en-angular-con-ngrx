
// ToDo: Nota , este archivo contiene todos los efectos

import { UsuariosEffects } from './usuarios.effects';

// Efectos Autorizados , este array va en la configuracion del effec en app.module
export const AuthEffects: any[] = [ UsuariosEffects ];


export * from './usuarios.effects';
