import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, Status } from 'src/app/shared/todo';
import { TodosService } from '../todos.service';

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
    private todosService: TodosService
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
      this.todosService.getOne(id).subscribe(data => {
        this.todo = data as Todo;
        this.todoForm = this.formBuilder.group(this.todo);
        // this.todoForm.setValue(this.todo); both solution works but what should be the best practice ?
      });
    }
  }

  onSubmit() {
    if (this.todo.id) {
      this.todosService
        .update(this.todoForm.value)
        .subscribe(() => this.goBack());
    } else {
      this.todosService
        .insert(this.todoForm.value)
        .subscribe(() => this.goBack());
    }
  }

  goBack() {
    this.router.navigate(['/todos']);
  }
}
