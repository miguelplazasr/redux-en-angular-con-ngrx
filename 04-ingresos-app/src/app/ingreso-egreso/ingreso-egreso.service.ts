import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IngresoEgresoModel} from './ingreso-egreso.model';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(
    private afDb: AngularFirestore,
    public authService: AuthService
  ) { }

  crearIngresoEgreso( ingresoEgreso: IngresoEgresoModel) {

    const user = this.authService.getUsuario();

    return this.afDb.doc(`${ user.uid }/ingresos-egresos`)
      .collection('items').add( {...ingresoEgreso} );


  }

}
