import classes from "./Food.module.css";
import React from 'react';
import Counter from "../../UI/Counter/Counter";

// props.Food.img
const Food = (props) => {
  return (
    <div className={classes.Food}>
        
    <div className={classes.ImgBox}>
        <img src={props.Food.img} alt= " Hamburger"/>
    </div>

    <div className={classes.DescBox}>
        <h2 className={classes.Title}>{props.Food.title}</h2>
        {props.noDesc?null:<p className={classes.Desc}>{props.Food.des}</p>}
        <div className={classes.PriceWrap}>
            <span className={classes.Price}>{props.Food.price}</span>
            <span className={classes.Kcal}>{props.Food.kcal}</span>
            <Counter 
            Food={props.Food}
            />
        </div>
    </div>
</div>
  );
};

export default Food;