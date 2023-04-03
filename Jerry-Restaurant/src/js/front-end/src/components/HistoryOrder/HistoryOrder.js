import style from "./HistoryOrder.module.css"
import Footer from "../footer/footer";   
import  React,{ useState,useEffect} from 'react';
import Order from "./Order/Order.js"
import RestaurantService from "../../services/RestaurantService"


const HistoryOrder = () => {
  

  const [historyOrder,setHistoryOrder]=useState([]);

  useEffect(() => {
    const userId =  localStorage.getItem("userId")
    console.log("userId",userId)
    const fetchData = async() => {
    const result = await RestaurantService.getHistoryOrder(userId);
    setHistoryOrder(result.data)
    }

    fetchData();
  
  },[]); 
  return (
    <>
    <div className={style.allOrder}><p className={style.inner}>All orders here!</p></div>

      <div className={style.divBox}></div>
      {historyOrder.map(item =>
                <Order
                    key={item.id}
                    order={item}
                />
            )}
      <Footer/>
    </>
  )
}

export default HistoryOrder;