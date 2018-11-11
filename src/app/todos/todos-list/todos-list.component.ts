import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../../local-db/todo';
import { TodosService } from '../todos.service';

import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.sass']
})
export class TodosListComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'title',
    'status',
    'creationDate',
    'dueDate'
  ];
  dataSource;
  selection = new SelectionModel<Todo>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private todosService: TodosService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.todosService.getAll());
    this.dataSource.sort = this.sort;
    // this.dataSource.sort('status');
    this.dataSource.paginator = this.paginator;
  }

  onCheckboxChange(element) {
    if (
      confirm(
        'Are you sure you want to change the status of ' +
          element.title +
          '? It will no longer be editable.'
      )
    ) {
      element.status = 'Done';
      this.dataSource.sort = this.sort;
    }
  }
}
