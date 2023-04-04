import React from 'react';
import Footer from "../../footer/footer";
import style from "../HistoryOrder.module.css";
import { useNavigate } from 'react-router-dom'


const Order = (props) => {


const order = props.order;

// console.log("order",order)
const navigate = useNavigate();
const toOrderFood = () => {
  const linkurl = "/OrderFood/"+order.rid;
  navigate(linkurl)
}
  return (
  <>


    <div className={style.historyOrder}>
      <p className={style.title}>{order.title}</p>
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
    <button className={style.button} onClick={toOrderFood}>One more time!</button>
   
    <Footer/>
    </>
  );

  }
export default Order;