import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import ServicePage from './pages/ServicePage'
import Rootlayout from './components/RootLayout'

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
      }

    ]
  }])
  return <RouterProvider router={router} />


}

export default App
