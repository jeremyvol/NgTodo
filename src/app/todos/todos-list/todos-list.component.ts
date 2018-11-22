import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Todo, Status } from '../../shared/todo';
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
    'dueDate',
    'read',
    'edit'
  ];
  dataSource;
  selection = new SelectionModel<Todo>(true, []);
  selectedRowIndex = -1;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.todosService.getAll());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onCheckboxChange(e: any, element: Todo) {
    if (element.status !== Status.done) {
      element.status = Status.done;
      this.dataSource.sort = this.sort;
    } else {
      element.status = Status.toDo;
      this.dataSource.sort = this.sort;
    }
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
  }
}
