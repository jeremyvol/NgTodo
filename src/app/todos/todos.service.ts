import { Injectable } from '@angular/core';
import { TODOS } from '../local-db/mock-todos';
import { Todo, Status } from '../local-db/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor() {}

  getAll(): Todo[] {
    return TODOS;
  }

  getOne(id: number): Todo {
    const todos = this.getAll();

    for (let index = 0; index < todos.length; index++) {
      if (id === todos[index].id) {
        return todos[index];
      }
    }
  }

  update(todo: Todo) {
    const todos = this.getAll();
    for (let index = 0; index < todos.length; index++) {
      if (todo.id === todos[index].id) {
        todos[index] = todo;
      }
    }
  }

  insert(todo) {
    const todos = this.getAll();
    let maxid = 0;

    todos.map(function(el) {
      if (el.id > maxid) {
        maxid = el.id;
      }
    });
    todos.push({
      id: maxid,
      title: todo.title,
      description: todo.description,
      status: Status.toDo,
      creationDate: new Date(),
      dueDate: todo.dueDate
    });
  }
}
