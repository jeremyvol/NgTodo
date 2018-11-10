import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [TodosListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [TodosService]
})
export class TodosModule { }
