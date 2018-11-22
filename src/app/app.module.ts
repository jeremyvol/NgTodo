import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Functionnal modules
import { AppRoutingModule } from './app-routing.module';
import { TodosModule } from './todos/todos.module';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

// Importations pour charger et configurer l'API simulée.
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    TodosModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
