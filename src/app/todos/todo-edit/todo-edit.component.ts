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
  todoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      status: new FormControl(Status.toDo),
      creationDate: new FormControl(new Date()),
      dueDate: new FormControl(new Date())
    });

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
      this.todoForm = this.formBuilder.group(this.todo);
    }
  }

  onSubmit() {
    if (this.todo.id) {
      this.store.dispatch(
        new TodoActions.UpdateTodo({
          id: this.todo.id,
          todo: this.todoForm.value
        })
      );
    } else {
      this.store.dispatch(new TodoActions.AddTodo(this.todoForm.value));
    }
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/todos']);
  }
}
