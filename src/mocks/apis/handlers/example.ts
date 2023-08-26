import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';

const getExample = (_: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(ctx.status(200), ctx.json({ code: 'SUCCESS', data: 'Hello World' }));
};

export const exampleHandler = [
  rest.get('/example', getExample), //
  rest.get('/hello', getExample),
];
