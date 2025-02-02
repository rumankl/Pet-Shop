import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import ServicePage from './pages/ServicePage'
import Rootlayout from './components/RootLayout'
import UserRoutes from './UI/UserRoutes'
import Login from './features/auth/Login'
import SignUp from './features/auth/SignUp'

const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
      , {
        path: '/about-page',
        element: <AboutPage />
      }, {
        path: '/contact-page',
        element: <ContactPage />
      }, {
        path: '/product-page',
        element: <ProductPage />,
      }, {
        path: '/service-page',
        element: <ServicePage />,
      }, {
        element: <UserRoutes />,
        children: [
          {
            path: '/login',
            element: <Login />
          },
          {
            path: '/signup',
            element: <SignUp />
          }
        ]
      }

    ]
  }])
  return <RouterProvider router={router} />


}

export default App
