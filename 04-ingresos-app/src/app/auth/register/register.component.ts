import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(
    public _aut: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    console.log(data);
    this._aut.crearUsuario( data.nombre, data.email, data.password );
  }
}
