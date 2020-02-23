import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {IngresoEgresoModel} from '../ingreso-egreso.model';
import {Subscription} from 'rxjs';
import {IngresoEgresoService} from '../ingreso-egreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {

  items: IngresoEgresoModel[];
  subscription: Subscription = new Subscription();

  constructor(
    private ingresoEgresoService: IngresoEgresoService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {

    this.subscription = this.store.select('ingresoEgreso')
      .subscribe(ingresoEgreso => {
        this.items = ingresoEgreso.items;
        console.log(ingresoEgreso.items);
      });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  borrarItem(item: IngresoEgresoModel) {


    this.ingresoEgresoService.borrarIngresoEgreso(item.uid)
      .then( () => {
        Swal.fire(
          'Eliminado',
          item.descripcion,
          'success'
        );
      });

  }
}
