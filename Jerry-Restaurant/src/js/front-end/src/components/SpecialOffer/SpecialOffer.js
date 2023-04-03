import style from "./SpecialOffer.module.css";
import { Link }from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';
import Offer from './Offer/Offer';
import Footer from '../footer/footer';
import RestaurantService from "../../services/RestaurantService"
import React,{useState,useEffect} from 'react';


const SpecialOffer = () => {

    const [RestaurantData , setRestaurantData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
        const result = await RestaurantService.getRestaurantList();
        const oldData = result.data;
        let i = oldData.length;
        while(i>4){
            let length = oldData.length;
            let random = Math.round(Math.random() * (length-1))
            oldData.splice(random,1 )
            i--;
        }
      
        setRestaurantData(oldData)
        
        }
        fetchData();
      
      },[]);  

  return (
    <>
         <p className={style.Title1}>Today's Special Offer</p>
    <Link to="/Main" className={style.Skip}>Skip</Link>
    < RightOutlined className={style.RO}/> 
    
    {RestaurantData.map(item =>
               <Offer 
                    key={item.id}
                    Offer={item}
                />
            )}
          
            <Footer/>
    </>
  )
}

export default SpecialOffer