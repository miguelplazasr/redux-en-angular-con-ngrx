import * as fromIngresoEgreso from './ingreso-egreso.actions';
import {IngresoEgresoModel} from './ingreso-egreso.model';
import {Action} from '@ngrx/store';
import { AppState} from '../app.reducer';

//Esto se ve en el Redux navegador
export interface IngresoEgresoState {
  items: IngresoEgresoModel[];
}

// Esto es una expansion del AppStateReducer
export interface AppState extends AppState {
  ingresoEgreso: IngresoEgresoState;
}

const InitState: IngresoEgresoState = {
  items: []
};


export function IngresoEgresoReducer(state = InitState, action: fromIngresoEgreso.acciones): IngresoEgresoState {

  switch (action.type) {


    case fromIngresoEgreso.SET_ITEMS:

      //Siempre se debe desbaratar el arreglo que viene en la accion
      return {
        items: [
          ...action.itmes.map(item => {

            //Aqui se rompen la relacion de cada uno de los objetos
            return {
              ...item
            };
          })
        ]
      };

    case fromIngresoEgreso.UNSET_ITEMS:
      return {
        items: []
      };


    default:
      return state;
  }


}






