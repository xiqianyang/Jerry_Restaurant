import  style from "./Offer.module.css";

import React from 'react'
import { Link } from "react-router-dom";

const Offer = (props) => {

  // ,state:{id:props.Offer.id}

  const id = props.Offer.id
  const linkurl = "/OrderFood/"+id;
  return (
    <Link to = {linkurl} className={style.Link}>
    <div className={style.Food}>
        
    <div className={style.ImgBox}>
        <img src={props.Offer.img} alt= " Hamburger"/>
    </div>
    <div className={style.DescBox}>
        <h2 className={style.Title}>{props.Offer.title}</h2>
       <p className={style.Desc}>{props.Offer.des}</p>
        <div className={style.PriceWrap}>
            <p className={style.Average_cost} >Average cost:</p>
            <span className={style.Price}>{props.Offer.price}</span>
            <p className={style.Deliver_time} >Deliver time:</p>
            <span className={style.Time}>{props.Offer.deliverTime}</span>
        </div>
    </div>
</div>
</Link>
  )
}

export default Offer