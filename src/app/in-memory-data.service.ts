import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TODOS } from './shared/mock-todos';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = TODOS;
    return {};
  }
}
