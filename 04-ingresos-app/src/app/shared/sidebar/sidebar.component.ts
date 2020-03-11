import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserModel} from '../../auth/user.model';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {filter} from 'rxjs/operators';
import {IngresoEgresoService} from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  nombre: string;

  public subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private auth: AuthService,
    private ingresoEgresoService: IngresoEgresoService

  ) { }

  ngOnInit() {

    this.subscription =  this.store.select('auth')
      .pipe(
        // Con el pipe filter solo devuelve el uid del usuario cuando lo tenga, no es necesario hacer un timeout
        filter( auth => auth.user != null )
      )
      .subscribe( auth => this.nombre = auth.user.name );


  }

  logout() {
    this.auth.logout();
    this.ingresoEgresoService.cancelarSubscriptions();
  }


  ngOnDestroy(): void {

    this.subscription.unsubscribe();


  }
}
