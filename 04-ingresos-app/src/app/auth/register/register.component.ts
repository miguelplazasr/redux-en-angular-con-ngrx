import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  cargando: boolean;
  subscription: Subscription;

  constructor(
    public auth: AuthService,
    public store: Store<AppState>
  ) { }

  ngOnInit() {

    this.subscription = this.store.select('ui')
      .subscribe( ui => this.cargando = ui.isLoading );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(data: any) {
    this.auth.crearUsuario( data.name, data.email, data.password );
  }
}
