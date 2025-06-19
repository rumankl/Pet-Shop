// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'
// import ContactPage from './pages/ContactPage'
// import ProductPage from './pages/ProductPage'
// import ServicePage from './pages/ServicePage'
// import Rootlayout from './components/RootLayout'
// import UserRoutes from './ui/UserRoutes'
// import Login from './features/auth/Login'
// import SignUp from './features/auth/SignUp'
// import ProductAdmin from './features/admin/ProductAdmin'
// import ProductForm from './features/admin/productForm'
// import ProductEdit from './features/admin/productEdit/ProductEdit'
// import Products from './features/products/Products'

// const App = () => {
//   const router = createBrowserRouter([{
//     path: '/',
//     element: <Rootlayout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />
//       }
//       , {
//         path: '/about-page',
//         element: <AboutPage />
//       }, {
//         path: '/contact-page',
//         element: <ContactPage />
//       }, {
//         path: '/product-page',
//         element: <ProductPage />,
//       }, {
//         path: '/service-page',
//         element: <ServicePage />,
//       }, {
//         element: <UserRoutes />,
//         children: [
//           {
//             path: '/login',
//             element: <Login />
//           },
//           {
//             path: '/signup',
//             element: <SignUp />
//           }
//         ]
//       }, {
//         path: '/products',
//         element: <Products />,
//         children: [
//           {
//             path: 'product-admin',
//             element: <ProductAdmin />
//           },
//           {
//             path: 'product-form',
//             element: <ProductForm />
//           }, {
//             path: 'product-edit/:id',
//             element: <ProductEdit />
//           }
//         ]
//       }

//     ]
//   }])
//   return <RouterProvider router={router} />


// }

// export default App


import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Rootlayout from './components/RootLayout'
import UserRoutes from './UI/UserRoutes'
import Login from './features/auth/Login'
import SignUp from './features/auth/SignUp'
import ProductAdmin from './features/admin/ProductAdmin'
import ProductForm from './features/admin/productForm'
import ProductEdit from './features/admin/productEdit/ProductEdit'
import Products from './features/products/Products'
import ProductDetail from './features/products/ProductDetail'
import CartPage from "./features/cart/CartPage"
import UserProfile from "./features/profile/UserProfile"
import OrderDetail from "./features/order/OrderDetail"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import PetFoodies from "./Home/PetFoodies"
import SlideImage from "./features/admin/SlideImage/SlideImage"
import Dog from "./Home/Dog"
import FoodAdmin from "./features/admin/food/FoodAdmin"
import FoodForm from "./features/admin/food/FoodForm"
import Food from "./features/food/Food"
import FoodEdit from "./features/admin/food/foodEdit/FoodEdit"
import AllProducts from "./features/products/AllProducts"
import FoodDetail from "./features/food/FoodDetail"
import FoodCartPage from "./foodcart/FoodCartPage"
import FormMeetTeam from "./pages/FormMeetTeam"
import FoodOrderDetail from "./features/foodOrder/FoodOrderDetail"
import LatestBlogDetail from "./features/products/LatestBlogDetail"
import FormLatestBlog from "./pages/FormLatestBlog"
import LatestBlogId from "./features/products/LatestBlogId"
import DisplayMessage from "./features/message/DisplayMessage"
import MessageDetail from "./features/message/MessageDetail"
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Products />

        },
        {
          path: '/about-page',
          element: <AboutPage />
        },

        {
          path: '/contact-page',
          element: <ContactPage />
        },
        {
          path: '/all-product-page',
          element: <AllProducts />
        },
        {
          path: 'product-admin',
          element: <ProductAdmin />
        },
        {
          path: "meet-team-admin",
          element: <FormMeetTeam />
        },
        {
          path: "latestblog-admin",
          element: <FormLatestBlog />
        },
        {
          path: 'food-admin',
          element: <FoodAdmin />
        },

        {
          path: 'image-admin',
          element: <SlideImage />
        },
        {
          path: 'product-form',
          element: <ProductForm />
        },
        {
          path: 'food-form',
          element: <FoodForm />
        },

        {
          path: 'product-edit/:id',
          element: <ProductEdit />
        },
        {
          path: 'food-edit/:id',
          element: <FoodEdit />
        },

        {
          path: 'order-detail/:id',
          element: <OrderDetail />
        },
        {
          path: 'all-message',
          element: <DisplayMessage />
        },
        {
          path: 'message-detail/:id',
          element: <MessageDetail />
        },
        {
          path: 'foodorder-detail/:id',
          element: <FoodOrderDetail />
        },

        {
          path: 'user-profile',
          element: <UserProfile />
        },
        {
          path: 'product-detail/:id',
          element: <ProductDetail />
        },
        {
          path: 'food-detail/:id',
          element: <FoodDetail />
        },
        {
          path: 'cart-page/:id',
          element: <CartPage />
        },
        {
          path: 'foodcart-page',
          element: <FoodCartPage />
        },

        {
          path: "food",
          element: <Food />
        },
        {
          path: "latest-blog",
          element: <LatestBlogDetail />
        },
        {
          path: "/latest-blog/:id",
          element: <LatestBlogId />
        },

        {
          element: <UserRoutes />,
          children: [
            {
              path: 'login',
              element: <Login />

            },

            {
              path: 'signup',
              element: <SignUp />

            }
          ]
        },


      ]
    },




  ]);

  return <RouterProvider router={router} />;
}
export default App










