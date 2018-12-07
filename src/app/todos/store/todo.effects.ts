// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Action } from '@ngrx/store';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { Observable, of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';

// import { TodosService } from '../todos.service';
// import { TodoActions } from './todo.actions';

// @Injectable()
// export class TodoEffects {
//   @Effect()
//   login$: Observable<Action> = this.actions$.pipe(
//     ofType('INIT_TODOS'),
//     mergeMap(action =>
//       this.http.post('/auth', action.payload).pipe(
//         // If successful, dispatch success action with result
//         map(data => ({ type: 'LOGIN_SUCCESS', payload: data })),
//         // If request fails, dispatch failed action
//         catchError(() => of({ type: 'LOGIN_FAILED' }))
//       )
//     )
//   );

//   constructor(
//     private http: HttpClient,
//     private actions$: Actions,
//     private todoService: TodosService
//   ) {}

// @Effect()
// loadTodos$: Observable<TodoActions> = this.actions$.ofType('INIT_TODOS').switchMap(action =>
// this.todoService.getAll()).map((todos: any) => this.TodoActions.InitTodos(todos));
// }

// import * as fromMatieres from '../store/todo.reducer';
// import { AppState } from '../index';
// import { createSelector } from '@ngrx/store';
// export {
//   selectMatieresIds,
//   selectMatieresEntities,
//   selectMatieres,
//   selectTotalMatieres
// } from '../store/todo.reducer';

// La première fonction amène vers le state matieres
// export const todosState$ = (state: AppState) => state.todos;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
/*export const selectMatieres$ = createSelector(todosState$,(matieres) =>  matieres.data);*/

// export const selectMatiereListEntitiesConverted$ = createSelector(
//   todosState$,
//   fromMatieres.selectMatieres
// );

// export const selectMatieresLoading$ = createSelector(
//   todosState$,
//   matieres => matieres.loading
// );

// export const selectMatieresLoaded$ = createSelector(
//   todosState$,
//   matieres => matieres.loaded
// );

// export const selectMatieresErrors$ = createSelector(
//   todosState$,
//   matieres => matieres.logs
// );
