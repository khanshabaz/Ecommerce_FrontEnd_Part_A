
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home"
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/Checkout';
import ProductDetailPage from './Pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectedLoggedInUser } from './features/auth/authSlice';
import { useEffect } from 'react';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './Pages/404Page';
import OrderSuccessPage from './Pages/OrderSuccessPage';
import UserProfilePage from './Pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import UserOrdersPage from './Pages/UserOrdersPage';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './Pages/AdminHome';
import AdminProductDetailPage from './Pages/AdminProductDetailPage';
import AdminProductFormPage from './Pages/AdminProductFormPage';
import AdminOrdersPage from './Pages/AdminOrdersPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home/>
      </Protected>
    )
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome/>
      </ProtectedAdmin>
    )
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage/>
      </ProtectedAdmin>
    )
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage/>
      </ProtectedAdmin>
    )
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage/>
      </ProtectedAdmin>
    )
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/logout",
    element: <Logout/>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage/>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage/>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element:  (
      <Protected>
        <Checkout/>
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element:  (
      <Protected>
        <ProductDetailPage/>
      </Protected>
    )
  },
  {
    path: "/admin/product-detail/:id",
    element:  (
      <ProtectedAdmin>
        <AdminProductDetailPage/>
      </ProtectedAdmin>
    )
  },
  {
    path: "/order-success/:id",
    element:  (
      <Protected>
        <OrderSuccessPage/>
      </Protected>
    )
  },
  {
    path: "/profile",
    element:  (
      <Protected>
        <UserProfilePage/>
      </Protected>
    )
  },
  {
    path: "/my-orders",
    element:  (
      <Protected>
        <UserOrdersPage/>
      </Protected>
    )
  },
  {
    path: "*",
    element:  (
        <PageNotFound/>
    )
  },
]);


function App() {
const dispatch=useDispatch();

const user=useSelector(selectedLoggedInUser)

useEffect(()=>{
  if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    dispatch(fetchLoggedInUserAsync(user.id))

  }
},[dispatch,user])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
