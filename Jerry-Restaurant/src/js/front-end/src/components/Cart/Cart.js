import React, {useContext, useState,useEffect} from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from "../../store/cart-context";
import CartDetails from './CartDetails/CartDetails';
import Checkout from "./Checkout/Checkout";
const Cart = () => {

    const ctx = useContext(CartContext);


    // Add a state to set whether the details are displayed
    const [showDetails, setShowDetails] = useState(false);
    // Add a state to set the checkout page to show or hide
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        if(ctx.totalAmount === 0){
        setShowDetails(false);
        setShowCheckout(false); 
    }

    });

    // Add a function to display the details page
    const toggleDetailsHandler = () => {
        if(ctx.totalAmount === 0) {
            setShowDetails(false);
            return;
        };
        setShowDetails(prevState => !prevState);//Before is true, return false, etc.
    };

    const showCheckoutHandler = () => {

        
        // RestaurantService.checkout();
        if(ctx.totalAmount === 0) return;
        setShowCheckout(true);
    };

    const hideCheckoutHandler = () => {
        setShowCheckout(false);
    };

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}
           {showDetails && <CartDetails/>}
        <div className={classes.Icon}>
        <img  src={iconImg} alt="icon"/>
        {ctx.totalAmount === 0 ? null : <span className={classes.TotalAccount}>{ctx.totalAmount}</span>}
        </div>
             {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>Choose your food!</p> :
                <><p className={classes.Price}>{ctx.totalPrice}</p>
                 <p className={classes.Kcal}>{ctx.totalKcal}Kcal</p></> }

           <button
                 onClick={showCheckoutHandler}
                 className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>Check out!</button>
         </div>
         
        
       
    );
};

export default Cart;
