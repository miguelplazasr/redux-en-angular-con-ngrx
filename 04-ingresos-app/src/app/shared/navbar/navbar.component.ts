import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserModel} from '../../auth/user.model';
import {Subscription} from 'rxjs';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  nombre: string;

  public subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private authService: AuthService

  ) { }

  ngOnInit() {

    this.subscription =  this.store.select('auth')
      .pipe(
        // Con el pipe filter solo devuelve el uid del usuario cuando lo tenga, no es necesario hacer un timeout
        filter( auth => auth.user != null )
      )
      .subscribe( auth => this.nombre = auth.user.name );


  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
  }

}
