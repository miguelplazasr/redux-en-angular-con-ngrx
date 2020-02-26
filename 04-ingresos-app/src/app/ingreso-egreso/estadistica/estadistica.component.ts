import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
// Con el lazyLoad no se carga el AppState de la aplicacion si no el AppState de IngresoEgreso Reducer , la interface
import {AppState} from '../../app.reducer';
import * as fromIngresoEgreso from '../ingreso-egreso.reducer';

import {Subscription} from 'rxjs';
import {IngresoEgresoModel} from '../ingreso-egreso.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  ingresos: number;
  egresos: number;

  cuantosIngresos: number;
  cuantosEgresos: number;

  subscription: Subscription = new Subscription();


  // Doughnut
  public doughnutChartLabels: string[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: number[] = [];


  constructor(
    //private store: Store<AppState> // Con el lazyLoad no se carga el AppState de la aplicacion si no el AppState de IngresoEgreso Reducer , la interface
  private store: Store<fromIngresoEgreso.AppState>
) { }

  ngOnInit() {

    this.subscription = this.store.select('ingresoEgreso')
      .subscribe( ingresoEgreso => {
        this.contarIngresoEgreso( ingresoEgreso.items );
      });

  }

  contarIngresoEgreso( items: IngresoEgresoModel[] ) {

    this.ingresos = 0;
    this.egresos = 0;

    this.cuantosEgresos = 0;
    this.cuantosIngresos = 0;

    items.forEach( item => {

      if ( item.tipo === 'ingreso') {
        this.cuantosIngresos ++;
        this.ingresos += item.monto;
      } else {
        this.cuantosEgresos ++;
        this.egresos += item.monto;
      }

    });

    this.doughnutChartData = [ this.ingresos, this.egresos ];

  }

}
