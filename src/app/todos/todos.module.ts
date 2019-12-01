// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Module & Components
import { TodoRoutingModule } from './todo-routing.module';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodosListComponent, TodoDetailsComponent, TodoEditComponent],
  imports: [CommonModule, SharedModule, TodoRoutingModule]
})
export class TodosModule {}
