import * as fromFiltro from './filter.actions';
import {SET_FILTRO} from './filter.actions';


const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer( state = estadoInicial, action: fromFiltro.acciones): fromFiltro.filtrosValidos {

  switch ( action.type ) {

    case SET_FILTRO:
      return action.filtro;

    default:
      return state;

  }

}
