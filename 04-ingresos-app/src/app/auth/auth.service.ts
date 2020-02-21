import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

import * as firebase from 'firebase';

import Swal from 'sweetalert2';
import {map} from 'rxjs/operators';
import {UserModel} from './user.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducer';
import {ActivarLoadingAction, DesactivarLoadingAction} from '../shared/ui.actions';
import {SetUserAction} from './auth.actions';
import {Subscription} from 'rxjs';
// import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Se inicializa para evitar el error que se presenta cuando se intenta ingresar a la aplicacion durectamente por la ruta , sin el login.
  private userSubscription: Subscription = new Subscription();

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFirestore,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  initAuthListener() {

    this.afAuth.authState.subscribe((fbUser: firebase.User) => {

      if ( fbUser ) {
        this.userSubscription = this.afDb.doc(`${ fbUser.uid }/usuario`)
          .valueChanges()
          .subscribe( (usrObj: any) => {

            // El objeto usrObj no coincide con el modelo entonces ...
            console.log( usrObj );

            const newUser = new UserModel( usrObj );

            this.store.dispatch( new SetUserAction( newUser ));
            console.log( newUser );



          } );
      } else {

        // Se debe cancelar la subscripcion porque va a estar escuchando cambios de cualquier usuario que se conecte

        this.userSubscription.unsubscribe();
      }

    });
  }

  crearUsuario(name: string, email: string, password: string) {

    this.store.dispatch( new ActivarLoadingAction() );

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(resp => {

        const user: UserModel = {
          uid: resp.user.uid,
          name,
          email: resp.user.email
        };

        // Aqui se crea el documento del usuario en la base de datos firebase
        this.afDb.doc(`${ user.uid }/usuario`)
          .set( user )
          .then( () => {
            this.router.navigate(['/']);
            this.store.dispatch( new DesactivarLoadingAction() );
          });

      })
      .catch(err => {
        console.log(err);
        this.store.dispatch( new DesactivarLoadingAction() );

        Swal.fire({
          title: 'Error en el login',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });

  }

  login(email: string, password: string) {

    this.store.dispatch( new ActivarLoadingAction());

    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(resp => {
        this.router.navigate(['/']);
        this.store.dispatch( new DesactivarLoadingAction());

      })
      .catch(err => {
        this.store.dispatch( new DesactivarLoadingAction());

        Swal.fire({
          title: 'Error en el login',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });

      });

  }

  logout() {

    this.router.navigate(['/login']);

    this.afAuth.auth.signOut();

  }

  isAuthenticated() {
    return this.afAuth.authState
      .pipe(
        map(fbUser => {

          if (fbUser == null) {
            this.router.navigate(['/login']);
          }

          return fbUser != null;
        })
      );
  }

}
