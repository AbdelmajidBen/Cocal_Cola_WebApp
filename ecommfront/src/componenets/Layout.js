import React from 'react';
import { Outlet } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import "react-toastify"
import Footer from './Footer';
import Header from './Header';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='light'
    />
   </>
  )
}

export default Layout