/**
 * @link https://github.com/KIMSEUNGGYU/playground/blob/00-template-api/00-template-api/src/mocks/apis/browser.ts
 */

import { setupWorker } from 'msw';

import handlers from './handlers';

export const worker = setupWorker(...handlers);
