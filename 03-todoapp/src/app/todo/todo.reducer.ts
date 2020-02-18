
import * as fromTodo from './todo.actions';
import {TodoModel} from './model/todo.model';

const todo1 = new TodoModel('Vencer a Thanos');
const todo2 = new TodoModel('Salvar el mundo');
const todo3 = new TodoModel('Pedir prestado el traje de IronMan');

todo2.completado = true;

const estadoInicial: TodoModel[] = [todo1, todo2, todo3 ];

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


