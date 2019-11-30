// import { createSelector } from '@ngrx/store';
import { Todo } from '../../shared/todo.interface';
import * as TodoActions from './todo.actions';
import { TODOS } from 'src/app/shared/mock-todos';
// import { ActionReducerMap } from '@ngrx/store';

// export interface AppState {
//   todosList: TodoState;
// }

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: TODOS
};

// Selectors
// export const selectTodos = (state: AppState) => state.todos;

// Reducers
export function todoReducer(
  state = initialState,
  action: TodoActions.TodoActions
) {
  switch (action.type) {
    case TodoActions.ActionTypes.ADD_TODO:
      let maxid = 0;
      state.todos.map(el => {
        if (el.id > maxid) {
          maxid = el.id;
        }
      });
      action.payload.id = maxid + 1;
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case TodoActions.ActionTypes.UPDATE_TODO:
      const todo = state.todos.find(el => {
        return el.id === action.payload.id;
      });
      const index = state.todos.indexOf(todo);
      const updatedTodo = { ...todo, ...action.payload.todo };
      const todos = [...state.todos];
      todos[index] = updatedTodo;
      return {
        ...state,
        todos: todos
      };
    default:
      return state;
  }
}
