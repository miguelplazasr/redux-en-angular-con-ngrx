
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as fromUsuarioActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UsuarioService} from '../../services/usuario.service';
import {UsuarioModel} from '../../models/usuario.model';
import {of} from 'rxjs';
import {usuarioActions} from '../actions';

@Injectable()
export class UsuarioEffects {


  constructor(
    private actions$: Actions,
    public usuarioService: UsuarioService
  ) { }

  // @Effect({ dispatch: false }) el dispatch false es para evitar el loop de las peticiones antes de parar el pipe switchMap
  @Effect()
  cargarUsuario$ = this.actions$.pipe(
    ofType( fromUsuarioActions.CARGAR_USUARIO ),
    switchMap( ( action: fromUsuarioActions.CargarUsuario ) => {

      console.log( action );
      const id = action.id;

      return this.usuarioService.getUserById( action.id )
        .pipe(
          map( (user: UsuarioModel) => new fromUsuarioActions.CargarUsuarioSuccess( user ) ),
          catchError( error => of(new fromUsuarioActions.CargarUsuarioFail( error )) )
        );
    } )

  );

}
