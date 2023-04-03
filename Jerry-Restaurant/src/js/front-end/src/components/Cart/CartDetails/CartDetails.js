import React, {useContext, useState} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css';
import CartContext from "../../../store/cart-context";
import Food from '../../OrderFood/Food/Food';
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {

    const ctx = useContext(CartContext);

    // Set the state to control the display of the confirmation box
    const [showConfirm, setShowConfirm] = useState(false);

    // Add function to show confirmation window
    const showConfirmHandler = () => {
        setShowConfirm(true);
    };

    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    };

    const okHandler = () => {
        // Clear shopping Cart
        ctx.clearCart();
    };

    return (
        <Backdrop >
                {showConfirm && <Confirm
                 onCancel={cancelHandler}
                onOk={okHandler}
                 confirmText={'Confirm to clear Cart?'}/>}
            <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>


                    <h2 className={classes.Title}>Food details</h2>
                    <div
                    onClick={showConfirmHandler}
                      className={classes.Clear}>
                        <FontAwesomeIcon icon = {faTrash}/>
                      <span>  Clear shopping Cart!</span>
                    </div>
                </header>
                
                 <div className={classes.MealList}>
                     {
                         ctx.items.map(item =>
                             <Food noDesc key={item.id} Food={item}/>
                         )
                     }
                  </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;
