import { Injectable } from '@angular/core';
import { TODOS } from '../local-db/mock-todos';
import { Todo } from '../local-db/todo';

// import { HttpClient} from '@angular/http';
// import {Observable} from 'rxjs';

// import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getAll(): Todo[] {
    return TODOS;
  }

  /*private handleError(error: any): Observable<any> {
    console.error('Error : ', error);
    return Observable.reject(error.message || error);
  }*/

  getOne(id: number) {
    const todos = this.getAll();

    for (let index = 0; index < todos.length; index++) {
      if (id === todos[index].id) {
        return todos[index];
      }
    }
  }
}
