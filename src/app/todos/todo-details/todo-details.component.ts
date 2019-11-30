import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs';

import { Todo } from '../../shared/todo.interface';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.sass']
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo = null;
  // todosState: Observable<{ todos: Todo[] }>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    // this.todosState = this.store.select('todoList');
    this.store
      .pipe(select((state: any) => state.todoState.todos))
      .subscribe(data => {
        const todos = data as Todo[];
        this.todo = todos.find(el => {
          return el.id === id;
        });
      });

    // select(fromRoot.getTodoState).subscribe(data => {});
  }
}
