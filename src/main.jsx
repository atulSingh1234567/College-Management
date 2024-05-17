import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Job from './pages/Jobpage'
import OurStarsPage from './pages/OurStarsPage'
import AdminPage from './pages/adminSection/AdminPageLayout'
import AdminLogin from './pages/adminSection/AdminLogin'
import AddAdminPage from './pages/adminSection/AddAdminPage'
import AddStudents from './pages/adminSection/AddStudents'
import PostJob from './pages/adminSection/PostJob'
import Settingspage from './pages/Settingspage'
const router = createBrowserRouter([{
  path: '',
  element: <Layout/>,
  children: [
    {
      path: '',
      element: <Homepage />
    },
    {
      path: '/jobs',
      element: <Job />
    },
    {
      path: '/our-stars',
      element: <OurStarsPage />
    },
    {
      path: '/admin',
      element: <AdminPage />,
      children: [
        {
          path: '',
          element: <PostJob />
        },
        {
          path: 'admin-login',
          element: <AdminLogin />
        },
        {
          path: 'add-admin',
          element: <AddAdminPage />
        },
        {
          path: 'add-student',
          element: <AddStudents />
        },
        {
          path: 'post-a-job',
          element: <PostJob />
        }
      ]
    },
    {
      path: 'settings/:chosenSettings',
      element: <Settingspage />
    }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
