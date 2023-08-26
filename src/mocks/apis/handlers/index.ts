import { exampleHandler } from '@/mocks/apis/handlers/example.ts';
import { todosHandler } from '@/mocks/apis/handlers/todos';

const handlers = [
  ...todosHandler, //
  ...exampleHandler,
];

export default handlers;
