import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.sass']
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.todosService.getOne(id).subscribe(data => {
        this.todo = data as Todo;
      });
    });
  }
}
