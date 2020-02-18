import {TodoModel} from './todo/model/todo.model';
import {ActionReducerMap} from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.actions';

export interface AppState {
  todos: TodoModel[];
  filtro: fromFiltroActions.filtrosValidos;
}


export const APP_REDUCERS: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
};

