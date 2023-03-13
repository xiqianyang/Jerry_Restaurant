import { Button, Form, Input } from 'antd';
import "./Login.module.css";
import { Link }from "react-router-dom";



const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
}; 

const Login = () => (

    // const navigate = useNavigate();

  <return>

  <div  className='login'>
 
  <Form
    name="basic"
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
    <span className='welcome'>Welcome to Jerry's Restaurant</span>
    <p className='login_text'>Login</p>
    <Form.Item
      label="Email"
       name="username"
      rules={[
        {
          required: true,
         
          message: 'Please input your email!',
        },
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
    <div>
    </div>
      <Button type="primary" htmlType="submit" className='login_button'>
        <Link to="/SpecialOffer" className='login_click'>Login</Link> 
      </Button>
      <span className='or'>Or </span>      
        <Link to="/Signup">Sign up!</Link>
      </Form>
  </div>
  </return>
);

export default Login;