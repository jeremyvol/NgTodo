import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { TODOS } from '../shared/mock-todos';
import { Todo, Status } from '../shared/todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {}

  private todosUrl = 'api/todos'; // URL to web api

  getAll(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.todosUrl)
      .pipe(catchError(this.handleError('getAll', [])));
  }

  getOne(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .get<Todo>(url)
      .pipe(catchError(this.handleError<Todo>(`getHero id=${id}`)));
  }

  update(todo: Todo): Observable<any> {
    return this.http
      .put(this.todosUrl, todo, httpOptions)
      .pipe(catchError(this.handleError<any>('update')));
  }

  insert(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.todosUrl, todo, httpOptions)
      .pipe(catchError(this.handleError<Todo>('insert')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
