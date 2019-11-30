import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

import { reducers } from './app.reducer';

// Functionnal
import { TodosModule } from './todos/todos.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    TodosModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
