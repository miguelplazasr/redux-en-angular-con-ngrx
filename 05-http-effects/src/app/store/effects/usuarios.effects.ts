// ToDo: 8. Creacion de los Effects. Es similar a un servicio en Angular

import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as fromUsuariosActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UsuarioService} from '../../services/usuario.service';
import {UsuarioModel} from '../../models/usuario.model';
import {of} from 'rxjs';

@Injectable()
export class UsuariosEffects {


  constructor(
    private actions$: Actions,
    public usuariosService: UsuarioService
  ) { }

  // @Effect({ dispatch: false }) el dispatch false es para evitar el loop de las peticiones antes de parar el pipe switchMap
  @Effect()
  cargarUsuarios$ = this.actions$.pipe(
    ofType( fromUsuariosActions.CARGAR_USUARIOS ),
    switchMap( () => {
      return this.usuariosService.getUsers()
        .pipe(
          map( (users: UsuarioModel[]) => new fromUsuariosActions.CargarUsuariosSuccess( users ) ),
          catchError( error => of(new fromUsuariosActions.CargarUsuariosFail( error )) )
        );
    } )

  );

}
