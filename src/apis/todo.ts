import { BaseResponse, client } from '.';

export type GetTodosResponse = BaseResponse<Todo[]>;
export const getTodos = async () => {
  const res = await client.get<GetTodosResponse>('/todos');

  return res.data.data;
};

export type CreateTodoRequest = Todo['text'];
export type CreateTodoResponse = BaseResponse<Todo>;
// TODO: todoText 보다는 payload 로 통일하기? -> 타입 지정해서 유의미하게 처리?
export const createTodo = async (todoText: CreateTodoRequest): Promise<Todo> => {
  const res = await client.post<CreateTodoResponse>('/todo', todoText);

  return res.data.data;
};

export type DeleteTodoRequest = string; // GYU-TODO: Todo['id'] 타입이 numbrer 라서.. 변환후 해야할듯.! (고민하기)
export const deleteTodo = async (todoId: DeleteTodoRequest) => {
  const res = await client.delete(`/todo/${todoId}`);

  return res.data;
};

// GYU-TODO: THNIK updated 할 todo 를 전송하는게 맞을까? id 만 받아서 백엔드에서 처리하는게 맞는걸까?
export type UpdateTodoResponse = BaseResponse<Todo>;
export const updateTodo = async (updatedTodo: Todo): Promise<Todo> => {
  const id = updatedTodo['id'];
  const res = await client.put<UpdateTodoResponse>(`/todo/${id}`, updatedTodo);

  return res.data.data;
};

export type UpdateDraggedTodoRequest = {
  fromTodoId: Todo['id'];
  toTodoId: Todo['id'];
};
export type UpdateDraggedTodoResponse = BaseResponse<Todo[]>;
export const updatedDraggedTodo = async ({ fromTodoId, toTodoId }: UpdateDraggedTodoRequest): Promise<Todo[]> => {
  const res = await client.put<UpdateDraggedTodoResponse>(`/todo`, {
    fromTodoId,
    toTodoId,
  });

  return res.data.data;
};
