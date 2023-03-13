import classes from "./SpecialOffer.module.css";
import React from 'react';
import Offer from "./Offer/Offer.js";
import { Link }from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';
// rafce

const SpecialOffer = (props) => {
  return (
<div className={classes.SpecialOffer}>
    <p className={classes.Title1}>Today's Special Offer</p>
    <Link to="/Main" className={classes.Skip}>Skip</Link>
    < RightOutlined className={classes.RO}/>
  
            {props.SpecialOffersData.map(item =>
                <Offer
                    key={item.id}
                    Offer={item}
                />
            )}
        </div>
  );
};

export default SpecialOffer;
