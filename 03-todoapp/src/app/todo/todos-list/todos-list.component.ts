import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {TodoModel} from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: TodoModel[] = [];
  filtro: string;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store
      .subscribe( state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
      });
  }

}
