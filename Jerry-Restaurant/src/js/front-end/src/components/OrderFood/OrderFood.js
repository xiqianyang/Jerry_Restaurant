import classes from "./OrderFood.module.css";
import React,{useState,useEffect} from 'react';
import Food from "./Food/Food.js";
import FilterMeals from '../FilterMeals/FilterMeals'
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import { LeftOutlined } from "@ant-design/icons";
import { Link ,useParams }from "react-router-dom";
import RestaurantService from "../../services/RestaurantService"

const OrderFood = () => {

  
  const [filterData , setfilterData] = useState([]); 
    const restaurantId = useParams();
    // console.log("OrderFood props", props.Offer.id);

  const [OrderFoodData , setOrderFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
    const result = await RestaurantService.getFoodList(restaurantId.id);
    // setfilterData(result.data)
    setOrderFoodData(result.data)
    }
    fetchData();
  
  },[]); 

// Create a state to store the data of the shopping cart
     /*
     * 1. Commodities [] items
     * 2. Total number of products (totalAmount)
     * 3. The total price of the product (totalPrice)
     * */
    const [cartData, setCartData] = useState({
      items: [],
      totalAmount: 0,
      totalPrice: 0,
      totalKcal:0,
  });

 
  // Create a function to filter meals
  const filterHandler = (keyword) => {

    const newOrderFoodsData = OrderFoodData.filter(items => items.title.indexOf(keyword) !== -1);
    setOrderFoodData(newOrderFoodsData)
  } 

  // Add items to cart
  const addItem = (food) => {
// offer the product to add to the shopping cart
       // copy the shopping cart
      const newCart = {...cartData};

      // Check if the item exists in the shopping cart
      if (newCart.items.indexOf(food) === -1) {
          // add offer to cart
          newCart.items.push(food);
          //Modify the quantity of an item
          food.amount = 1;
      } else {
        food.amount += 1;
      }

      //    increase the total
      newCart.totalAmount += 1;

      newCart.totalPrice += food.price;
      newCart.totalKcal += food.kcal;

      // reset cart
      setCartData(newCart);
  };

  const removeItem = (food) => {

      const newCart = {...cartData};
      food.amount -= 1;
      if (food.amount === 0) {
          newCart.items.splice(newCart.items.indexOf(food), 1);
      }
      newCart.totalAmount -= 1;
      newCart.totalPrice -= food.price;
      newCart.totalKcal -= food.kcal;

      setCartData(newCart);
  };

  const clearCart = () => {

      const newCart = {...cartData};
      // Clear the quantity of items in the shopping cart to 0
      newCart.items.forEach(item => delete item.amount);
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      newCart.totalKcal = 0;

      setCartData(newCart);
  };

  
  return (
    
    
<div className={classes.OrderFood}>
    <div className={classes.Lo}>
    <LeftOutlined/>
    <Link to="/Main" className={classes.back}>Back</Link>
    </div>
    <FilterMeals  onFilter={filterHandler}/>
    
  <CartContext.Provider value={{...cartData,addItem,removeItem,clearCart}}>
     
            {OrderFoodData.map(item =>
                <Food
                    key={item.id}
                    Food={item}
                />
            )}
            <Cart/> 
            </CartContext.Provider>
        </div>
  );
};

export default OrderFood;
