export class Todo {
  id = 0;
  title = '';
  description = '';
  status: Status = Status.toDo;
  creationDate: Date = new Date();
  dueDate: Date = new Date();
}

export enum Status {
  toDo = 'To do',
  done = 'Done'
}
