import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TODOS } from './shared/mock-todos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = TODOS;
    return { todos };
  }
}
