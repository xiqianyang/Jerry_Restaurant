import classes from "./Offer.module.css";
import React from 'react';
// import Counter from "../../UI/Counter/Counter";

const Offer = (props) => {
  return (
    <div className={classes.Offer}>
        
    <div className={classes.ImgBox}>
        <img src={props.Offer.img} alt= " Hamburger"/>
    </div>
    <div className={classes.DescBox}>
        <h2 className={classes.Title}>{props.Offer.title}</h2>
        {props.noDesc?null:<p className={classes.Desc}>{props.Offer.desc}</p>}
        <div className={classes.PriceWrap}>
            <span className={classes.Price}>{props.Offer.price}</span>
            {/* <Counter
                Offer={props.Offer}
            /> */}
        </div>
    </div>
</div>
  );
};

export default Offer;