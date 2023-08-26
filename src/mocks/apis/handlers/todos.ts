import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';
import { CreateTodoRequest, CreateTodoResponse, GetTodosResponse } from 'src/apis';
import { UpdateDraggedTodoRequest, UpdateDraggedTodoResponse, UpdateTodoResponse } from 'src/apis/todo';
import { todos as mockTodos } from 'src/mocks/data';

let todos = mockTodos;

const getTodos = (_: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json<GetTodosResponse>({
      code: 'SUCCESS',
      data: todos,
    }),
  );
};

const createTodo = async (req: RestRequest<CreateTodoRequest>, res: ResponseComposition, ctx: RestContext) => {
  const todoText = await req.text();

  const newTodo = {
    id: Date.now(),
    text: todoText,
    done: false,
  };
  todos = todos.concat(newTodo);

  return res(
    ctx.status(201),
    ctx.json<CreateTodoResponse>({
      code: 'SUCCESS',
      data: newTodo,
    }),
  );
};

type DeleteTodoPathParams = { todoId: string };
const deleteTodo = async (req: RestRequest<null, DeleteTodoPathParams>, res: ResponseComposition, ctx: RestContext) => {
  const { todoId } = req.params;

  todos = todos.filter((todo) => todo.id !== +todoId);

  return res(ctx.status(204));
};

const updateDoneTodo = async (
  req: RestRequest<Todo, { todoId: string }>,
  res: ResponseComposition,
  ctx: RestContext,
) => {
  const { todoId } = req.params;
  const updatedTodo = await req.json();

  todos = todos.map((todo) => (todo.id === +todoId ? updatedTodo : todo));
  return res(
    ctx.status(201),
    ctx.json<UpdateTodoResponse>({
      code: 'SUCCESS',
      data: updatedTodo,
    }),
  );
};

const updatedDraggedTodo = async (
  req: RestRequest<UpdateDraggedTodoRequest>,
  res: ResponseComposition,
  ctx: RestContext,
) => {
  const { fromTodoId, toTodoId } = await req.json<UpdateDraggedTodoRequest>();

  // fromTodoId 와 toTodoId dragged 한 기능 수행
  // from을 todo 위치로 이동
  let tempTodos = todos.slice();
  const fromTodoIndex = todos.findIndex((todo) => todo.id === fromTodoId);
  const toTodoIndex = todos.findIndex((todo) => todo.id === toTodoId);

  tempTodos = tempTodos.filter((todo) => todo.id !== fromTodoId);
  const todoItem = todos[fromTodoIndex];
  tempTodos.splice(toTodoIndex, 0, todoItem);

  todos = tempTodos;

  return res(
    ctx.status(201),
    ctx.json<UpdateDraggedTodoResponse>({
      code: 'SUCCESS',
      data: todos,
    }),
  );
};

export const todosHandler = [
  // todo
  rest.get('/todos', getTodos),
  rest.post('/todo', createTodo),
  rest.put('/todo', updatedDraggedTodo),
  // todo detail
  rest.delete('/todo/:todoId', deleteTodo),
  rest.put('/todo/:todoId', updateDoneTodo),
];
