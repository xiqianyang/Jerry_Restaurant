import { message } from 'antd';
import React from 'react';
import classes from './Bar.module.css';
import { Link,useNavigate } from 'react-router-dom'
import RestaurantService from "../../../../services/RestaurantService"

const Bar = (props) => {
    const navigate = useNavigate();
    const click =()=> {
        //  organize data to backend
        const param ={}
        const ctx = props.ctx;
        const uid = localStorage.getItem("userId");
        param["uid"] = uid;
        param["rid"] = ctx.items[0].rid;
        
        const items = ctx.items
        console.log("ctx.items",items)

        //  calculate credit
        let credit = 0;
        items.forEach(item => {
            credit = credit + item.amount;
        
        });
    
        param["credit"] = credit;
        param["totalKcal"] = ctx.totalKcal;
        param["totalPrice"] = ctx.totalPrice;

        RestaurantService.checkout(param).then(response =>{
        const data = response.data;
        if(data>0){
            message.info('successful transaction',2)
            navigate("/HistoryOrder")

        }else{
            message.info('failed transaction',3)
            navigate("/Main")

        }  
        });
    }
    return (
        <div className={classes.Bar}>
        
            <div className={classes.TotalPrice}>In total:€{props.totalPrice}</div>
            <div className={classes.TotalPrice}> {props.totalKcal}Kcal</div>
            
          
           <button className={classes.Button} onClick ={click}>Pay now!</button>
            
        </div>
    );
};

export default Bar;
