import { worker } from '@/mocks/apis/browser.ts';

export const initMswConfig = () => {
  if (import.meta.env.MODE === 'development') {
    worker.start();
  }
};
