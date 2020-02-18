
import * as fromTodo from './todo.actions';
import {TodoModel} from './model/todo.model';

const estadoInicial: TodoModel[] = [];

export function todoReducer( state = estadoInicial, action: fromTodo.Acciones ): TodoModel[] {

  switch ( action.type ) {

    case fromTodo.AGREGAR_TODO:
      const todo = new TodoModel( action.texto );
      // con el spread ... estoy clonando el estado actual
      return [ ...state, todo ];

    default:
      return state;
  }

}


