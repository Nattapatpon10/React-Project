import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutAdmin } from './component/LayoutAdmin.tsx'
import { UserList } from './component/UserList.tsx'
import { RegisterPage } from './page/RegisterPage.tsx'
import { Layout } from './component/Layout.tsx'
import { LayoutStudent } from './component/LayoutStudent.tsx'
import { LeavePage } from './page/LeavePage.tsx'
import { StatisticsPage } from './page/StatisticsPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "userlist",
        element: <UserList />
      }
      
    ]
  },
  {
    path:"/student",
    element: <LayoutStudent />,
    children: [
      {
        path: "leavePage",
        element:<LeavePage />,
      },
      {
        path: "accountStudent",
        element:""
      },
     
      
    ]
  },
  {
    path:"/teacher",
    element:<Layout />,
    children: [
      {
        path: "statistics",
        element:<StatisticsPage />
      },
      {
        path: "accountTeacher",
        element:""
      }
      
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
