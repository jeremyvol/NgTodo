export class Todos {
    id: number;
    title: string;
    status: Status;
    creationDate: Date;
    dueDate: Date;
}

export enum Status {
    toDo = 'To do',
    inProgress = 'In Progress',
    done = 'Done'
}
