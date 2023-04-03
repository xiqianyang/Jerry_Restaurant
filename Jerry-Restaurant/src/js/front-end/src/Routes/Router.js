import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from '../components/Signup/Signup';
import SpecialOffer from "../components/SpecialOffer/SpecialOffer"
import Main from "../components/Main/Main";
import Account from "../components/Account/Account";
import OrderFood from '../components/OrderFood/OrderFood';
import  HistoryOrder  from '../components/HistoryOrder/HistoryOrder';


const Router = () => {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SpecialOffer" element={<SpecialOffer/>}/>
          <Route path="/Main" element={<Main />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/OrderFood/:id" element={<OrderFood />} />
          <Route path="/HistoryOrder" element={<HistoryOrder />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default Router