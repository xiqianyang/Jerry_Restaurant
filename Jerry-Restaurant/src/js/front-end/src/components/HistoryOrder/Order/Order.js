import React from 'react';
import Footer from "../../footer/footer";
// import FilterMeals from "../../FilterMeals/FilterMeals";
import style from "../HistoryOrder.module.css";


const Order = (props) => {
const order = props.order;
  return (
  <>
  
    {/* <FilterMeals /> */}

    <div className={style.historyOrder}>
      <p className={style.title}>order.title</p>
      <div className={style.date}>
      <img src= {order.img}  alt="food picture" className={style.img1}/> 
      <div className={style.page}>
      <p > Order date: {order.createDate} </p>
      <p > Credit : {order.credit}</p>
      <p > Total calories {order.totalKcal}Kcal</p>
      </div>
      </div>
    </div>
    <p className={style.total}>In Total:€ {order.totalPrice}</p>
    <button className={style.button}>One more time!</button>
   
    <Footer/>
    </>
  );

  }
export default Order;