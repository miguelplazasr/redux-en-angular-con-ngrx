import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {environment} from '../environments/environment';

// @ngrx
import { StoreModule } from '@ngrx/store';
import {appReducers} from './app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


// Modulos personalizados
import {AuthModule} from './auth/auth.module';

// import {IngresoEgresoModule} from './ingreso-egreso/ingreso-egreso.module';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent, Se paso al AuthModule
    // RegisterComponent, Se paso al AuthModule
    // DashboardComponent, Se paso al IngresoEgresoModule
    // IngresoEgresoComponent, Se paso al IngresoEgresoModule
    // EstadisticaComponent, Se paso al IngresoEgresoModule
    // DetalleComponent, Se paso al IngresoEgresoModule
    // FooterComponent, Se paso al SharedMOdule
    // NavbarComponent, Se paso al SharedMOdule
    // SidebarComponent, Se paso al SharedMOdule
    // OrdenIngresoEgresoPipe Se paso al IngresoEgresoModule
  ],
  imports: [
    BrowserModule,
    AuthModule,
    // SharedModule, Se paso al SharedMOdule
    // IngresoEgresoModule,
    AppRoutingModule,
    // FormsModule, Se elimina porque el aproch por template de los formularios solo esta en el AutModule
    // ReactiveFormsModule, Se paso al SharedMOdule
    // ChartsModule Se paso al SharedMOdule
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // AngularFireAuthModule, Se paso al AuthModule
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
