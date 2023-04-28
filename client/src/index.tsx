import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Resume from './Views/Resume';
import './index.css';
import Rooter from './Pages/Rooter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rooter />,
    /* errorElement: <ErrorPage />, */
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

