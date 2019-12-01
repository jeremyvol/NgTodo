import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Todo, Status } from '../../shared/todo.interface';
import * as TodoActions from '../store/todo.actions';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.sass']
})
export class TodoEditComponent implements OnInit {
  todo: Todo;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    if (id) {
      this.store
        .pipe(select((state: any) => state.todoState.todos))
        .subscribe(data => {
          const todos = data as Todo[];
          this.todo = todos.find(el => {
            return el.id === id;
          });
        });
      this.form = this.fb.group(this.todo);
    } else {
      this.form = this.fb.group({
        title: ['', Validators.required],
        description: [''],
        status: [Status.toDo, Validators.required],
        creationDate: [new Date(), Validators.required],
        dueDate: [new Date(), Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.todo && this.todo.id) {
      this.store.dispatch(
        new TodoActions.UpdateTodo({
          id: this.todo.id,
          todo: this.form.value
        })
      );
    } else {
      this.store.dispatch(new TodoActions.AddTodo(this.form.value));
    }
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/todos']);
  }
}
