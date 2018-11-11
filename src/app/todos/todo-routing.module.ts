import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

// routes definition
const todosRoutes: Routes = [
  { path: 'todos', component: TodosListComponent },
  { path: 'todo/:id', component: TodoDetailsComponent },
  { path: 'todo/edit/:id', component: TodoEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(todosRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
