import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "@fontsource/inter";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Example from './pages/Example';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "example",
    element: <Example />
  },
  /*
   {
    path: '*',
    element: error 404,
  }, // este es para la pagina 404
   */
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
