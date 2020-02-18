import { Pipe, PipeTransform } from '@angular/core';
import {TodoModel} from '../todo/model/todo.model';
import * as fromFiltro from './filter.actions';
@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: TodoModel[], filtro: fromFiltro.filtrosValidos ): TodoModel[] {

    switch ( filtro ) {

      case 'completados':
        return todos.filter( todo => todo.completado );

        case 'pendientes':
          return todos.filter( todo => !todo.completado );

      default:
        return todos;

    }

    return todos;
  }

}
