import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IngresoEgresoModel} from './ingreso-egreso.model';
import {IngresoEgresoService} from './ingreso-egreso.service';
import Swal from 'sweetalert2';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducer';
import {ActivarLoadingAction, DesactivarLoadingAction} from '../shared/ui.actions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {

  forma: FormGroup;
  tipo = 'ingreso';
  loadingSubs: Subscription = new Subscription();
  cargando: boolean;

  constructor(
    private fb: FormBuilder,
    public ingresoEgresoService: IngresoEgresoService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {

    this.loadingSubs = this.store.select('ui')
      .subscribe( ui => this.cargando = ui.isLoading );

    this.createForm();

  }

  ngOnDestroy(): void {
    this.loadingSubs.unsubscribe();
  }

  createForm() {

    this.forma = this.fb.group({
        descripcion: ['', Validators.compose([Validators.required])],
        monto: [0, Validators.compose([Validators.min(0)])]
      }
    );

  }


  onSubmit() {


    this.store.dispatch( new ActivarLoadingAction());

    const ingresoEgreso = new IngresoEgresoModel({...this.forma.value, tipo: this.tipo});


    this.ingresoEgresoService.crearIngresoEgreso( ingresoEgreso )
      .then( () => {

        this.store.dispatch( new DesactivarLoadingAction());

        Swal.fire(
          'Creado',
          ingresoEgreso.descripcion,
          'success'
        );

        this.forma.reset({ monto: 0  });



      });

    this.forma.reset({
      monto: 0
    });

  }
}
