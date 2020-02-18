import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/todo-item/todos-item.component';
import { TodosFooterComponent } from './todo/todo-footer/todos-footer.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {todoReducer} from './todo/todo.reducer';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {APP_REDUCERS} from './app.reducers';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodosItemComponent,
    TodosFooterComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot( APP_REDUCERS ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static StoreDevtoolsModule: any;
}
