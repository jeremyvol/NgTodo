import { Todo, Status } from './todo';

export const TODOS: Todo[] = [
    {
        id: 1,
        title: 'Payment for rent',
        status: Status.done,
        creationDate: new Date(2018, 11, 10),
        dueDate: new Date(2018, 11, 30)
    },
    {
        id: 2,
        title: 'Read Angular manual',
        status: Status.inProgress,
        creationDate: new Date(2018, 11, 7),
        dueDate: new Date(2018, 12, 31)
    },
    {
        id: 3,
        title: 'Write essay',
        status: Status.inProgress,
        creationDate: new Date(2018, 1, 1),
        dueDate: new Date(2018, 12, 1)
    },
    {
        id: 4,
        title: 'Concert',
        status: Status.toDo,
        creationDate: new Date(2018, 9, 10),
        dueDate: new Date(2018, 11, 17)
    },
    {
        id: 5,
        title: 'Housing tax',
        status: Status.toDo,
        creationDate: new Date(2018, 10, 14),
        dueDate: new Date(2018, 11, 26)
    }
];
