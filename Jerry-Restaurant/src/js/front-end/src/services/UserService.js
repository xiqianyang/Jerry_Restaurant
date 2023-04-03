import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/hello";

const ADD_USER_API = "http://localhost:8080/user/add";

const LOGIN_API = "http://localhost:8080/user/login";

const RESET_PASSWORD_URL = "http://localhost:8080/user/reset";

const GET_CREDIT_URL = "http://localhost:8080/user/credit/";

class UserService{
   saveUser(user){
    return axios.post(ADD_USER_API,user);
   }

   login(userinfo){
      return axios.post(LOGIN_API,userinfo)
   }

   reset(params){
      return axios.post(RESET_PASSWORD_URL,params)
   }

   getCredit(id){
      return axios.get(GET_CREDIT_URL+id)
   }

  
}
export default new UserService;
