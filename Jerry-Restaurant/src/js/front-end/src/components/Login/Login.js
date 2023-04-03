import { Button, Form, Input } from 'antd';
import style from "./Login.module.css";
import { Link, useNavigate }from "react-router-dom";
import UserService from '../../services/UserService';



const Login = () => {
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }; 
  const navigate = useNavigate();
  
  
  const onFinish = (values) => {
    UserService.login(values).then((response)=>{
    console.log('login response:',response );
    const loginCode = response.data;
    if(loginCode === -1){
      alert("this user does not exist")
    }else if(loginCode === 0){
      alert("the password is not right");
    }else{
      alert("login successfully!");
      localStorage.setItem("userId", loginCode);

      navigate("/SpecialOffer")
    }
    })
  };

  return (
    
    <div  className={style.login}>
 
  <Form
   
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <span className={style.welcome}>Welcome to Jerry's Restaurant</span>
    <p className={style.login_text}>Login</p>
    <div className={style.typeInput}>
    <Form.Item
      label="Email"
       name="email"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your email!',
        }
      ]}
    >
      
      <Input 
      placeholder='Type your Email here'
      />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password 
      placeholder='Type your password here!'
      />
    </Form.Item>
    </div>
      <Button htmlType="submit" className={style.login_button}>Login
      </Button>
      <div>
      <span className={style.or}>Or </span>      
        <Link to="/Signup" className={style.SignUpUrl}>Sign up!</Link>
      </div>
      </Form>
  </div>
  )
};

export default Login;