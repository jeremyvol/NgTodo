import { Action } from '@ngrx/store';
import { Todo } from '../../shared/todo';

export enum ActionTypes {
  INIT_TODOS = '[TODO] Init',
  ADD_TODO = '[TODO] Add',
  UPDATE_TODO = '[TODO] Update',
  GET_TODO = '[TODO] Get'
}

export class GetInitialTodoState implements Action {
  readonly type = ActionTypes.INIT_TODOS;
}

export class AddTodo implements Action {
  readonly type = ActionTypes.ADD_TODO;
  constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = ActionTypes.UPDATE_TODO;
  constructor(public payload: { id: number; todo: Todo }) {}
}

export type TodoActions = AddTodo | UpdateTodo;
