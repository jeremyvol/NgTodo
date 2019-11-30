import * as fromTodo from './todos/store/todo.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface State {
  todoState: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<State> = {
  todoState: fromTodo.todoReducer
};

export const getTodoState = createFeatureSelector<fromTodo.TodoState>('todo');

export const getState = createFeatureSelector<State>('appState');
