import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, Status } from 'src/app/shared/todo';
import { Store } from '@ngrx/store';
import * as TodoActions from '../store/todo.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.sass']
})
export class TodoEditComponent implements OnInit {
  todo: Todo;
  todoForm: FormGroup;
  todosState: Observable<{ todos: Todo[] }>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ todoList: { todos: Todo[] } }>
  ) {}

  ngOnInit() {
    this.todo = new Todo(); // object init in case of insert

    this.todoForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      status: new FormControl(Status.toDo),
      creationDate: new FormControl(new Date()),
      dueDate: new FormControl(new Date())
    });
    if (this.route.snapshot.params['id']) {
      const id = +this.route.snapshot.params['id'];
      this.todosState = this.store.select('todoList');
      this.todosState.subscribe(data => {
        const todos = data.todos as Todo[];
        this.todo = todos.find(el => {
          return el.id === id;
        });
        this.todoForm = this.formBuilder.group(this.todo);
        // this.todoForm.setValue(this.todo); both solution works but what should be the best practice ?
      });
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
