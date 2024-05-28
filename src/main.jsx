import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ErrorPage from './pages/errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello</div>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/register',
    element: <RegisterPage></RegisterPage>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
