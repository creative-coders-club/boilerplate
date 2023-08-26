export * from './todo';

import axios from 'axios';

export const client = axios.create();

export interface BaseResponse<T> {
  code: 'SUCCESS';
  data: T;
}

/**
 * @desc 임의로 데이터 요청시 delay 를 주고 싶을 때 사용
 * @param milliseconds
 * @example
 * async function getApi() {
 *  await delay(200);
 *  return axios.get('/example');
 * }
 */
export function delay(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
