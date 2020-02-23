import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IngresoEgresoModel} from './ingreso-egreso.model';
import {AuthService} from '../auth/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducer';
import {filter, map} from 'rxjs/operators';
import {SetItemsAction} from './ingreso-egreso.actions';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  ingresoEgresoListenerSubs: Subscription = new Subscription();
  ingresoEgresoItemsSubs: Subscription = new Subscription();

  constructor(
    private afDb: AngularFirestore,
    public authService: AuthService,
    private store: Store<AppState>
  ) { }

  initIngresoEgresoListener() {

    this.ingresoEgresoListenerSubs = this.store.select('auth')
      .pipe(
        // Con el pipe filter solo devuelve el uid del usuario cuando lo tenga, no es necesario hacer un timeout
        filter( auth => auth.user != null )
      )
      .subscribe( auth => this.ingresoEgresoItems( auth.user.uid ));


  }

  private ingresoEgresoItems( uid: string ) {

    this.ingresoEgresoItemsSubs = this.afDb.collection(`${ uid }/ingresos-egresos/items`)
    // observable que esta pendiente de los cambios
    // .valueChanges()
    // Con snapshotChanges puedo obtener el id del elemento que se necesita , estas funciones son exclusivas de firebase
      .snapshotChanges()
      .pipe(
        map( docData => {

          // Este map es de Javascript OJO
          return docData.map( doc => {
            return {
              uid: doc.payload.doc.id,
              ...doc.payload.doc.data()
            };
          });

        })
      )
      .subscribe( (collection: IngresoEgresoModel[]) => {

        this.store.dispatch( new SetItemsAction( collection ));

      } );
  }


  cancelarSubscriptions() {

    this.ingresoEgresoItemsSubs.unsubscribe();
    this.ingresoEgresoListenerSubs.unsubscribe();

  }

  crearIngresoEgreso( ingresoEgreso: IngresoEgresoModel) {

    const user = this.authService.getUsuario();

    return this.afDb.doc(`${ user.uid }/ingresos-egresos`)
      .collection('items').add( {...ingresoEgreso} );

  }

  borrarIngresoEgreso( uid: string ) {

    const user = this.authService.getUsuario();

    return this.afDb.doc(`${ user.uid }/ingresos-egresos/items/${ uid }`)
      .delete();

  }

}
