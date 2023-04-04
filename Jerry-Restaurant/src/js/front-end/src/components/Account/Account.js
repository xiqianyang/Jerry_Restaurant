import React, { useState,useEffect } from 'react';
import style from "./Account.module.css";
import Footer from "../footer/footer";
import { UserOutlined ,EditOutlined,GiftOutlined} from '@ant-design/icons';
import ChangeAccount from './ChangeAccount';
import { Button, Modal, Form, Input, message } from 'antd';
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom'


const Account = () => {


const navigate = useNavigate();

const [credit, setCredit] = useState(0);

useEffect(() => {
  const fetchData = async() => {
    const uid = localStorage.getItem("userId");
    const result = await UserService.getCredit(uid);
    const credit  = result.data;
    setCredit(credit)
  }
  fetchData();

},[]);  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    setIsModalOpen(false);
    const uid = localStorage.getItem("userId");
    values["id"]= uid
    //  call backend
    UserService.reset(values).then((response)=>{
      //  0 success 
      //  1 failed
      const result =  response.data;
      if(result === 0){
        message.info('reset password successfully ',2)
        navigate("/")
      }else{
        message.info('reset password failed ',2)
      }


    })


  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const jump = () => {
    message.info('Logout successfully ',1.5)
    navigate("/");
  }

  const [showPassword,setShowPassword] = useState(false);
  const showPasswordHandler =() => {
    setShowPassword(true);
  }
  return (
    
    <>
    {showPassword && <ChangeAccount/>}

    <div className={style.userHome}>
    <UserOutlined className={style.UserOutlined}/>
    <p className={style.userHome}>User's Home</p>
    </div>
    <div className={style.totalBox}>
    <div className={style.updateAccount} onClick={showModal}>
    <EditOutlined className={style.EditOutlined}/>
    <p>update Account</p>
    </div>

    
    <div className={style.point}>
    <GiftOutlined className={style.GiftOutlined}/>
    <p className={style.points}>{credit}</p>
    </div> 
    <p className={style.CurPoint}>Current points</p>
    </div>
          <Modal
           title="Resett password"
            open={isModalOpen} 
            width = {300}
            destroyOnClose={true}
            preserve={false}
             onCancel={handleCancel}
             footer={null}
             >
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
        <Input.Password />
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
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

      </Modal>
      
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className={style.Logout} onClick={jump}>
       Logout
      </Button>
    </Form.Item>
    <Footer/>
    
    </>
  )
}

export default Account