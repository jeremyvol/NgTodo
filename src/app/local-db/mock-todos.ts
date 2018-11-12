import { Todo, Status } from './todo';

export const TODOS: Todo[] = [
  {
    id: 1,
    title: 'Payment for rent',
    description: 'Love all, trust a few, do wrong to none.',
    status: Status.done,
    creationDate: new Date(2018, 10, 1),
    dueDate: new Date(2018, 11, 30)
  },
  {
    id: 2,
    title: 'Read Angular manual',
    description:
      'Fair is foul, and foul is fair: Hover through the fog and filthy air.',
    status: Status.toDo,
    creationDate: new Date(2018, 10, 7),
    dueDate: new Date(2018, 12, 31)
  },
  {
    id: 3,
    title: 'Write essay',
    description:
      'To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.',
    status: Status.toDo,
    creationDate: new Date(2018, 1, 1),
    dueDate: new Date(2018, 12, 1)
  },
  {
    id: 4,
    title: 'Concert',
    description:
      'Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.',
    status: Status.toDo,
    creationDate: new Date(2018, 9, 10),
    dueDate: new Date(2018, 11, 17)
  },
  {
    id: 5,
    title: 'Housing tax',
    description:
      'Once in a while as human being we have to contribute to the national effort. As so, pay taxes.',
    status: Status.toDo,
    creationDate: new Date(2018, 9, 14),
    dueDate: new Date(2018, 11, 26)
  }
];
