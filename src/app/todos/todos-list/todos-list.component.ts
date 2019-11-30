import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';

import { MatSort } from '@angular/material/sort';

import { Todo, Status } from '../../shared/todo.interface';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.sass']
})
export class TodosListComponent implements OnInit {
  dataSource: MatTableDataSource<Todo>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = [
    'select',
    'title',
    'status',
    'creationDate',
    'dueDate',
    'read',
    'edit'
  ];

  selectedRowIndex = -1;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store
      .pipe(select((state: any) => state.todoState.todos))
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
  }

  onCheckboxChange(element: Todo) {
    // TODO create new action and reducer for Todo Status change
    if (element.status !== Status.done) {
      element.status = Status.done;
    } else {
      element.status = Status.toDo;
    }
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
  }
}
