import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

import * as firebase from 'firebase';

import Swal from 'sweetalert2';
import {map} from 'rxjs/operators';
import {UserModel} from './user.model';
import {AngularFirestore} from '@angular/fire/firestore';
// import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFirestore,
    private router: Router
  ) {
  }

  initAuthListener() {

    this.afAuth.authState.subscribe((fbUser: firebase.User) => {

      console.log(fbUser);
    });
  }

  crearUsuario(name: string, email: string, password: string) {

    console.log( name );

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(resp => {

        const user: UserModel = {
          uid: resp.user.uid,
          name,
          email: resp.user.email
        };

        console.log(user);

        this.afDb.doc(`${ user.uid }/usuario`)
          .set( user )
          .then( () => {
            this.router.navigate(['/']);
          });



        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: 'Error en el login',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });

  }

  login(email: string, password: string) {

    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(resp => {
        this.router.navigate(['/']);
      })
      .catch(err => {
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
