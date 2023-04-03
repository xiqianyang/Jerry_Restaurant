import React from 'react';
import classes from './CheckoutItem.module.css';
import Counter from "../../../UI/Counter/Counter";

const CheckoutItem = (props) => {
    return (

        <div className={classes.CheckoutItem}>
            <div className={classes.MealImg}>
                <img src = {props.Food.img} alt="food"/>
            </div>
            <div className={classes.Desc}>
                <h2 className={classes.Title}>{props.Food.title}</h2>
                <div className={classes.PriceOuter}>
                <Counter Food={props.Food}/>
                    <div className={classes.Price}>{props.Food.price * props.Food.amount}</div>
                    <div className={classes.Kcal}>{props.Food.kcal * props.Food.amount}</div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;
