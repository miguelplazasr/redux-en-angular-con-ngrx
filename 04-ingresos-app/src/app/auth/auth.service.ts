import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

import * as firebase from 'firebase';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  initAuthListener() {

    this.afAuth.authState.subscribe( ( fbUser: firebase.User ) => {

      console.log(fbUser);
    } );
  }

  crearUsuario( nombre: string, email: string, password: string ) {

    this.afAuth.auth.createUserWithEmailAndPassword( email, password )
      .then( resp => {

        this.router.navigate(['/']);
      })
      .catch( err => {
        console.log( err );
        Swal.fire({
          title: 'Error en el login',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });

  }

  login( email: string, password: string ) {

    this.afAuth.auth
      .signInWithEmailAndPassword( email, password )
      .then( resp => {
        this.router.navigate(['/']);
      })
      .catch( err => {
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

}
