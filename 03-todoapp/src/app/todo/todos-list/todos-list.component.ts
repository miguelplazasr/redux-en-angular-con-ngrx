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

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('todos')
      .subscribe( todos => {
      this.todos = todos;
    });
  }

}
