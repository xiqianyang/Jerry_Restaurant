import axios from "axios";

const GET_RESTAURANT_LIST_URL = "http://localhost:8080/restaurant/pageList";

const GET_FOOD_LIST_URL = "http://localhost:8080/restaurant/foodList/";

const CHECK_OUT_URL = "http://localhost:8080/restaurant/checkout";

const HISTORY_ORDER_URL = "http://localhost:8080/restaurant/historyorder/"

class RestaurantService {
   getRestaurantList(){
    return axios.get(GET_RESTAURANT_LIST_URL);
   }

   getFoodList(id){
      return axios.get(GET_FOOD_LIST_URL+id);
     }

   checkout(params){

      return axios.post(CHECK_OUT_URL,params)
   }

   getHistoryOrder(id){
      return axios.get(HISTORY_ORDER_URL+id)
   }

}
export default new RestaurantService;
