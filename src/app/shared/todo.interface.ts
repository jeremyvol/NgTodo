// export class Todo {
//   id = 0;
//   title = '';
//   description = '';
//   status: Status = Status.toDo;
//   creationDate: Date = new Date();
//   dueDate: Date = new Date();
// }

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: Status;
  creationDate: Date;
  dueDate: Date;
}

export enum Status { // this enum allows to have more status in the future
  toDo = 'To do',
  done = 'Done'
}
