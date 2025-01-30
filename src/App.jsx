
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
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
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
]);


function App() {
const dispatch=useDispatch();

const user=useSelector(selectedLoggedInUser)

useEffect(()=>{
  if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
  }
},[dispatch,user])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
