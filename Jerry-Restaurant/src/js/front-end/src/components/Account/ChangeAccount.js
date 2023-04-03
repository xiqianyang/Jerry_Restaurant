import React from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';
import style from "./ChangeAccount.module.css";
import {Button,Form,Input} from 'antd';
import FormItem from 'antd/es/form/FormItem';

const ChangeAccount = () => {
  return (
     
        <>
        <Backdrop>
     
     <div className={style.input}>
     <Form.Item
        name=" password"
        label="New Password"
       className={style.passwordContext}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password  name = "password"  className={style.Password}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm New Password"
        className={style.confirmPasswordContext}
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
        <Input.Password className={style.confirmPassword}/>
      </Form.Item>
      </div>
      <Button className={style.button}>Update!</Button>
     
    </Backdrop> 
    </>
  )
}

export default ChangeAccount