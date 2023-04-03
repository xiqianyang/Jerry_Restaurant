import React, {useState} from 'react';
import Router from "./Routes/Router";


// const SpecialOffers_DATA = [
//   {
//       id: '1',
//       title: 'Hamburger',
//       desc: '100% beef and double-layer fragrant soft cheese11111',
//       price: 12,
//       img: 'images/4.png'
//   },
//   {
//       id: '2',
//       title: 'Double Cheeseburger',
//       desc: '100% pure beef and double-layer fragrant soft cheese11111',
//       price: 20,
//       img: 'images/4.png'
//   },
//   {
//       id: '3',
//       title: 'Double Burger',
//       desc: 'Two pieces of 100% pure beef with fresh ingredients111111 ',
//       price: 24,
//       img: 'images/4.png'
//   }, {
//       id: '4',
//       title: 'Spicy Chicken Burger',
//       desc: 'Golden crispy skin, tender and smooth chicken thigh meat,',
//       price: 21,
//       img: 'images/4.png'
//   }, {
//     id: '5',
//     title: 'Simple Cheese Burger',
//     desc: 'The original boneless chicken steak is tender and juicy11111',
//     price: 22,
//     img: 'images/4.png'
// }, {
//     id: '6',
//     title: 'Chicken Nugget Burger ',
//     desc: 'Crispy lettuce,  delicious healthy choice!111111111111111111',
//     price: 14,
//     img: 'images/4.png'
// }, {
//     id: '7',
//     title: 'Cheese Burger',
//     desc: '100% pure beef  rich taste emerges immediately after one bite',
//     price: 12,
//     img: 'images/4.png'
// }

// ];


const App = () => {
//   const [SpecialOffersData , setSpecialOffersData] = useState(SpecialOffers_DATA);

// // Create a state to store the data of the shopping cart
//      /*
//      * 1. Commodities [] items
//      * 2. Total number of products (totalAmount)
//      * 3. The total price of the product (totalPrice)
//      * */
//     const [cartData, setCartData] = useState({
//       items: [],
//       totalAmount: 0,
//       totalPrice: 0
//   });

//   // Create a function to filter meals
//   const filterHandler = (keyword) => {
//     const newSpecialOffersData = SpecialOffers_DATA.filter(items => items.title.indexOf(keyword) !== -1);
//     setSpecialOffersData(newSpecialOffersData)
//   } 

//   // Add items to cart
//   const addItem = (offer) => {
// // offer the product to add to the shopping cart
//        // copy the shopping cart
//       const newCart = {...cartData};

//       // Check if the item exists in the shopping cart
//       if (newCart.items.indexOf(offer) === -1) {
//           // add offer to cart
//           newCart.items.push(offer);
//           //Modify the quantity of an item
//           offer.amount = 1;
//       } else {
//           offer.amount += 1;
//       }

//       //    increase the total
//       newCart.totalAmount += 1;

//       newCart.totalPrice += offer.price;

//       // reset cart
//       setCartData(newCart);
//   };

//   const removeItem = (offer) => {

//       const newCart = {...cartData};
//       offer.amount -= 1;
//       if (offer.amount === 0) {
//           newCart.items.splice(newCart.items.indexOf(offer), 1);
//       }
//       newCart.totalAmount -= 1;
//       newCart.totalPrice -= offer.price;

//       setCartData(newCart);
//   };

//   const clearCart = () => {

//       const newCart = {...cartData};
//       // Clear the quantity of items in the shopping cart to 0
//       newCart.items.forEach(item => delete item.amount);
//       newCart.items = [];
//       newCart.totalAmount = 0;
//       newCart.totalPrice = 0;

//       setCartData(newCart);
//   };

  return (
    <>
   <Router/>
    {/* <CartContext.Provider value={{...cartData,addItem,removeItem,clearCart}}>
      <div>
        <SpecialOffer SpecialOffersData = {SpecialOffersData} onFilter={filterHandler} />
        
        </div>

    </CartContext.Provider> */}
    </>
  );
};

export default App;
