import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../../local-db/todo';
import { TodosService } from '../todos.service';

import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.sass']
})
export class TodosListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'status', 'creationDate', 'dueDate'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  // todos: Todo[] = null;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private todosService: TodosService
  ) { }

  ngOnInit() {
    // const data = ;
    this.dataSource = new MatTableDataSource(this.todosService.getAll());
    this.dataSource.sort = this.sort;
  }
}
