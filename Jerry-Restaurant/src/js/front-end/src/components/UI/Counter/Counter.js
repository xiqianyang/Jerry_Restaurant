import React, {useContext} from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";

// Components of the counter
const Counter = (props) => {

    // getcartContext
    const ctx = useContext(CartContext);


    // add cart function
    const addButtonHandler = () => {
        ctx.addItem(props.Food);
    };

    // function of delete food
    const subButtonHandler = () => {
        ctx.removeItem(props.Food);
    };

    return (    
        <div className={classes.Counter}> 
        {
            (props.Food.amount && props.Food.amount !== 0 ) ?
            (
            <>
            <button onClick={subButtonHandler} className={classes.Sub}><FontAwesomeIcon icon={faMinus}/></button>
             <span className={classes.count}>{props.Food.amount}</span>
             </>
            ) : null
        }
        
       
        <button 
        onClick={addButtonHandler}
        className={classes.Add}>
             <FontAwesomeIcon icon={faPlus}/></button>
        </div>
    );
};

export default Counter;
