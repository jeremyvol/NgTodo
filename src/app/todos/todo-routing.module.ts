import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosListComponent } from './todos-list/todos-list.component';

// routes definition
const todosRoutes: Routes = [
    { path: 'todos', component: TodosListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(todosRoutes)],
    exports: [RouterModule]
})
export class TodoRoutingModule { }
