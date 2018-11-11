import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [TodosListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  providers: [TodosService]
})
export class TodosModule {}
