import {Action} from '@ngrx/store';


export const AGREGAR_TODO = '[ToDo] Agregar todo';
export const TOGGLE_TODO = '[ToDo] Toggle todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor( public texto: string) {

  }

}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor( public id: number) {

  }

}

export type Acciones = AgregarTodoAction | ToggleTodoAction;
