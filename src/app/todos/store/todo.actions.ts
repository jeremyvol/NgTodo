import { Action } from '@ngrx/store';
import { Todo } from '../../shared/todo.interface';

export enum ActionTypes {
  INIT_STATE = '[TODO] Init',
  ADD_TODO = '[TODO] Add',
  UPDATE_TODO = '[TODO] Update'
}

export class InitTodos implements Action {
  readonly type = ActionTypes.INIT_STATE;
  constructor() {}
}

export class AddTodo implements Action {
  readonly type = ActionTypes.ADD_TODO;
  constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = ActionTypes.UPDATE_TODO;
  constructor(public payload: { id: number; todo: Todo }) {}
}

export type TodoActions = InitTodos | AddTodo | UpdateTodo;
