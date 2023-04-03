import {Button,Form,Input,Select,} from 'antd';
import { Link, useNavigate } from "react-router-dom";
import style from "./Signup.module.css";
import { LeftOutlined } from '@ant-design/icons';
import { useState } from 'react';
import FormItem from 'antd/es/form/FormItem';
import UserService from '../../services/UserService';


const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {span: 24,},
    sm: {span: 8,},
  },
  wrapperCol: {
    xs: {span: 24,},
    sm: {span: 16,},
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {span: 24,offset: 0,},
    sm: {span: 16,offset: 8,},
  },
};
const Signup = () => {
  
    const [form] = Form.useForm();
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // }; 
  
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{width: 75,}}
      >
        <Option value="353">+353</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  const [user,setUser] = useState({
    email:'',
    password:'',
    telephone:'',
    address:'',
  })
  
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({...user,[e.target.name]: value})
  }
  const saveUser = (e) => {
    console.log("user",user)
    // e.preventDefault();
    UserService.saveUser(user).then((response) => {
      console.log(response);
      alert("User saved successfully!");
      navigate("/")
    })
    .catch((error) => {
      alert("Failed to save user.");
      console.log(error);
    })

  }

  return(
  <div  className={style.SignUp}>

   <h2 className={style.Title}>Welcome to Jerry's Restaurant</h2>
   <h1 className={style.CA}>Create Account</h1>
   < LeftOutlined className={style.LO}/>
    <Link to="/" className={style.GoBack}>Go back</Link>
    <div className={style.Input}>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={saveUser}
      initialValues={{
        prefix: '353',
      }}
      scrollToFirstError
    >
  
      <Form.Item
        name="email"
        label="E-mail"
       
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input name = "email"  value = {user.email} onChange={(e) => handleChange(e)}/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
      
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password  name = "password" value = {user.password} onChange={(e) => handleChange(e)}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          name = "telephone"
          value = {user.telephone}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>      
      <FormItem   label = "PostCode" >
        <Input name = "address" value= {user.address} onChange={(e) => handleChange(e)}/>
      </FormItem>
      {/* <Form.Item {...tailFormItemLayout} > */}
        <Button  htmlType="submit"className={style.Button} >
           Register
        </Button>
      {/* </Form.Item> */}


    </Form>
    </div>
    
    </div>
    )
};

export default Signup;