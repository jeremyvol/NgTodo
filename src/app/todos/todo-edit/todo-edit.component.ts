import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, Status } from 'src/app/shared/todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.sass']
})
export class TodoEditComponent implements OnInit {
  todo: Todo = {
    id: 0,
    title: '',
    description: '',
    status: Status.toDo,
    creationDate: new Date(),
    dueDate: new Date()
  };

  todoForm = new FormGroup({
    title: new FormControl(this.todo.title, [Validators.required]),
    description: new FormControl(this.todo.description),
    dueDate: new FormControl(this.todo.dueDate)
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      const id = +this.route.snapshot.params['id'];
      this.todosService.getOne(id).subscribe(data => {
        this.todo = data as Todo;
      });
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.todoForm.value);
  }

  save(todo: Todo) {
    // WIP
    /*if (todo.id) {
      this.todosService.update(todo);
    } else {
      this.todosService.insert(todo);
    }
    this.router.navigate(['/todos']);*/
  }
}
