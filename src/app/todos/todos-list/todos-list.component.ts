import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo, Status } from '../../shared/todo';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Store } from '@ngrx/store';

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
  todosState: Observable<{ todos: Todo[] }>;
  todos: Todo[];
  dataSource;
  selection = new SelectionModel<Todo>(true, []);
  selectedRowIndex = -1;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<{ todoList: { todos: Todo[] } }>) {}

  ngOnInit() {
    this.todosState = this.store.select('todoList'); // initialState loaded
    this.todosState.subscribe(data => {
      this.todos = data.todos as Todo[];
      this.dataSource = new MatTableDataSource(this.todos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
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
