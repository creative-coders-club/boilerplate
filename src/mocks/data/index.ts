export const todos: Todo[] = [
  {
    id: 1,
    text: 'Javascript',
    done: true,
  },
  {
    id: 2,
    text: '리액트',
    done: false,
  },
  {
    id: 3,
    text: 'NextJS 적용하기',
    done: false,
  },
];

export const kanbans: Kanban[] = [
  {
    id: 123,
    title: '🤔 No Status',
    item: [
      {
        id: 11,
        text: '모노레포 적용하기',
      },
      {
        id: 12,
        text: 'Nx 학습하기',
      },
    ],
  },
  {
    id: 456,
    title: '👨‍💻 Todo',
    item: [
      {
        id: 21,
        text: '리액트 적용하기',
      },
      {
        id: 22,
        text: 'NextJs 적용하기',
      },
    ],
  },
  {
    id: 789,
    title: '🎉 Done',
    item: [
      {
        id: 31,
        text: 'Javascript',
      },
      {
        id: 32,
        text: 'Typescript',
      },
      {
        id: 33,
        text: 'HTML/CSS',
      },
    ],
  },
];
