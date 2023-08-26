import React from 'react';
import ReactDOM from 'react-dom/client';

import { initMswConfig } from '@/mocks';
import App from './App.tsx';
import './index.css';

// GYU-TODO: 주석 내용하고 initMswConfig 같은 내용, 관리 포인트를 어떻게 할까?
// if (import.meta.env.MODE === 'development') {
//   worker.start();
// }
initMswConfig();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
