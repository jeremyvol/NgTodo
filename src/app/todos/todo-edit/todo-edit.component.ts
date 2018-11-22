import { Component, OnInit } from '@angular/core';
import { Todo, Status } from 'src/app/shared/todo';
import { TodosService } from '../todos.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      const id = +this.route.snapshot.params['id'];
      this.todo = this.todosService.getOne(id);
    }
  }

  save(todo: Todo) {
    if (todo.id) {
      this.todosService.update(todo);
    } else {
      this.todosService.insert(todo);
    }
    this.router.navigate(['/todos']);
  }
}
