export class Todo {
  id: number;
  title: string;
  description: string;
  status: Status;
  creationDate: Date;
  dueDate: Date;
}

export enum Status {
  toDo = 'To do',
  // inProgress = 'In Progress',
  done = 'Done'
}
