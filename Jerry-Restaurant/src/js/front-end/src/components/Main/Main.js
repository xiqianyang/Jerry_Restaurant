import style from "./Main.module.css";
import Footer from "../footer/footer";   
import FilterMeals from "../FilterMeals/FilterMeals";
import React,{useState,useEffect} from 'react';
import Offer from "../SpecialOffer/Offer/Offer";
import RestaurantService from "../../services/RestaurantService"

export default function Main() {

  // refer to this blog to get data and then render page
  // https://juejin.cn/post/6884772230170050574

const [RestaurantData , setRestaurantData] = useState([]);

const [filterData , setfilterData] = useState([]);


useEffect(() => {
  const fetchData = async() => {
  const result = await RestaurantService.getRestaurantList();
  setfilterData(result.data)
  setRestaurantData(result.data)
    
  }
  fetchData();

},[]);  



const filterHandler = (keyword) => {
  if(keyword === ""){
    setRestaurantData(filterData)

  }else{
    setRestaurantData(filterData)
    const newRestaurantsData = filterData.filter(items => items.title.indexOf(keyword) !== -1);
    setRestaurantData(newRestaurantsData)
  }
 
} 
  return (
    <>
    <div className={style.divBox}>
      <FilterMeals onFilter={filterHandler}/>
    </div>
  
    <div className={style.BoxArea}>
      <div className={style.Box1}><img src="images/1.png" alt="a" className={style.img}></img><p className={style.title}>AllFood</p></div>
      <div className={style.Box1}><img src="images/1.png" alt="a" className={style.img}></img><p className={style.title}>Salad</p></div>
      <div className={style.Box1}><img src="images/1.png" alt="a" className={style.img}></img><p className={style.title}>Burger</p></div>
      <div className={style.Box1}><img src="images/1.png" alt="a" className={style.img}></img><p className={style.title}>Pizza</p></div>
      <div className={style.Box1}><img src="images/1.png" alt="a" className={style.img}></img><p className={style.title}>ChineseFood</p></div>
      <div className={style.Box1}><img src="images/1.png" alt="a" className={style.img}></img><p className={style.title}>IndianFood</p></div>
    </div>

    {/* <img src={"/images/largemealdeal1.png"} alt= " Hamburger"/> */}

   
    <div className={style.RinFo}>
    {RestaurantData.map(item =>
               <Offer 
                    key={item.id}
                    Offer={item}
                />
            )}
    </div>
   
     <Footer/>
     </>
  )
}
