import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/local-db/todo';
import { TodosService } from '../todos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.sass']
})
export class TodoEditComponent implements OnInit {
  todo: Todo = null;

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.todo = this.todosService.getOne(id);
  }
}
