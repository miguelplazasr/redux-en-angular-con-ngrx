import { Component } from '@angular/core';
import { Store} from '@ngrx/store';

// import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import * as fromContador from './contador/contador.actions';

import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number;

  // @ts-ignore
  constructor(
    private store: Store<AppState>
  ) {
    // con select('propiedad') se puede escuchar una propiedad especifica que tenga la aplicacion
    this.store.select('contador')
      .subscribe( contador => this.contador = contador );
  }

  incrementar() {
    const accion = new fromContador.IncrementarAction();

    this.store.dispatch( accion );
  }

  decrementar() {
    const accion = new fromContador.DecrementarAction();

    this.store.dispatch( accion );
  }

}
