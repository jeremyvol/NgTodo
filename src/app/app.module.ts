import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { TodosModule } from './todos/todos.module';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

// Importations pour charger et configurer l'API simulée.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    TodosModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // CommonModule,
    // FormsModule,
    // HttpModule,
    // AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    // MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
