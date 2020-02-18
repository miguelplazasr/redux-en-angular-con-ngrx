import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styles: []
})
export class TodosFooterComponent implements OnInit {


  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store
      .subscribe( state => {
        this.filtroActual = state.filtro;
      })

  }

  cambiarFiltro( nuevoFiltro: fromFiltro.filtrosValidos ) {

    const accion = new fromFiltro.SetFiltroAction( nuevoFiltro );

    this.store.dispatch( accion );


  }
}
