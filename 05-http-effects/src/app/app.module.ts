import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// NgRx
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {appReducers} from './store/app.reducer';
import {AuthEffects} from './store/effects';

// Environmet
import {environment} from '../environments/environment';

// Rutas
import { AppRouting } from './app.routing';


// Modulos personalizados
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {UsuariosModule} from './usuarios/usuarios.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( AuthEffects ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    SharedModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static StoreDevtoolsModule: any;
}
