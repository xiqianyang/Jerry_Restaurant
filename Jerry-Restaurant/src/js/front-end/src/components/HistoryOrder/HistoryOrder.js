import React from 'react';

import RestaurantService from "../../services/RestaurantService"
import  { useState,useEffect} from 'react';
import Order from "./Order/Order.js"

const HistoryOrder = () => {
  

  const [historyOrder,setHistoryOrder]=useState([]);

  useEffect(() => {
    const userId =  localStorage.getItem("userId")
    console.log("userId",userId)
    const fetchData = async() => {
    const result = await RestaurantService.getHistoryOrder(userId);
    console.log("getHistoryOrder",result.data)
    // setfilterData(result.data)
    setHistoryOrder(result.data)
    }

    fetchData();
  
  },[]); 
  return (
    <>
    {/* <div className={style.allOrder}><p className={style.inner}>All orders here!</p></div> */}

      {/* <div className={style.divBox}></div> */}
      <>
      {historyOrder.map(item =>
                <Order
                    key={item.id}
                    order={item}
                />
            )}
      </>
   
    </>
  )
}

export default HistoryOrder;