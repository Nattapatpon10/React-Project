import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutAdmin } from './component/LayoutAdmin.tsx'
import { UserList } from './component/UserList.tsx'
import { RegisterPage } from './page/RegisterPage.tsx'


const router = createBrowserRouter([
  {
    path: "/React-Project/",
    element: <App />,
  },
  {
    path: "/React-Project/register",
    element: <RegisterPage />,
  },
  {
    path: "/React-Project/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "userlist",
        element: <UserList />
      }
      
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
