package com.demo.jerryrestaurant.service;


import com.demo.jerryrestaurant.dao.UserMapper;
import com.demo.jerryrestaurant.entity.ResetPassword;
import com.demo.jerryrestaurant.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    private UserMapper userMapper;

    /*
    there are below possibility for user:
    1. user not exist , return -1
    2. password did not match , 0
    3. success ,>0
     */
    public Integer login(User user){
        //  get the user from database and compare password
        User userRecord = userMapper.getUserByEmail(user.getEmail());
        System.out.println("userRecord "+userRecord);

        // if can not find this user, return did not sign up
        if(userRecord == null){
            return -1;
        }
        String passwordRecord = userRecord.getPassword();
        String password = user.getPassword();
        if ( passwordRecord.equals(password)){
            return userRecord.getId();
        }
        return 0;
    }
    public Integer addUser(User user){
        // email can not be duplicated, if there is more time, we need to check it before insert it
        System.out.println(user);
        userMapper.addUser(user);
        Integer id = user.getId();
        return id;
    }

    public Integer reset(ResetPassword resetPassword){
        System.out.println("user id: " + resetPassword.getId()+" reset password ");

        Integer result = 1;
        try{
            userMapper.reset(resetPassword.getId(), resetPassword.getPassword());
            result = 0;
        }catch (Exception e){
            System.out.println(e);

        }
        return result;
    }

    public Integer credit(Integer id){
        System.out.println("user id: " + id);
        Integer result = userMapper.credit(id);
        return result;
    }


}

