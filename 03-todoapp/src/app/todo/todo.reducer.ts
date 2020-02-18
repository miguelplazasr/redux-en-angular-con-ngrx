
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

      case fromTodo.TOGGLE_TODO:

        // Se debe romper la referencia y enviar un nuevo T oDo para que redux funcione
        return state.map( todoEdit => {
          if (todoEdit.id === action.id ) {
            return {
              //aqui el spread ... clona todas las propiedades del objeto
              ...todoEdit,
              completado: !todoEdit.completado
            } ;
          } else {
            return todoEdit;
          }
        } );

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map( todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      } );

    case fromTodo.EDITAR_TODO:
      return state.map( todoEdit => {
        if ( todoEdit.id === action.id ) {
          return {
            //aqui el spread ... clona todas las propiedades del objeto
            ...todoEdit,
            // action es el objeto que se edita
            texto: action.texto
          } ;
        } else {
          return todoEdit;
        }
      } );

    case fromTodo.BORRAR_TODO:
      // EL filter retorna un nuevo arreglo por eso funciona
      return state.filter( todoEdit => todoEdit.id !== action.id );

    case fromTodo.BORRAR_ALL_TODO:
      // EL filter retorna un nuevo arreglo por eso funciona
      return state.filter( todoEdit => !todoEdit.completado );



    default:
      return state;
  }

}


