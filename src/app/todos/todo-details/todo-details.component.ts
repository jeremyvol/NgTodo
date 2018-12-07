import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../../shared/todo';
import * as fromTodos from '../store/todo.reducer';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.sass']
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo = null;
  todosState: Observable<{ todos: Todo[] }>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromTodos.AppState>
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.todosState = this.store.select('todoList');
    this.todosState.subscribe(data => {
      const todos = data.todos as Todo[];
      this.todo = todos.find(el => {
        return el.id === id;
      });
    });
  }
}
