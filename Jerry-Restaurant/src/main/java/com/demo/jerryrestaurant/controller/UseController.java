package com.demo.jerryrestaurant.controller;

import com.demo.jerryrestaurant.entity.ResetPassword;
import com.demo.jerryrestaurant.entity.User;
import com.demo.jerryrestaurant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UseController {

    @Autowired
    private UserService userService;

    // edit/add/get/delete
    @PostMapping(value = "/user/add")
    public Integer addUser(@RequestBody User user){
        Integer id= userService.addUser(user);
        return id;
    }

    @PostMapping("/user/login")
    public Integer login(@RequestBody User user){
        return userService.login(user);
    }

    @PostMapping("/user/reset")
    public Integer reset(@RequestBody ResetPassword resetPassword ){
        return userService.reset(resetPassword);
    }


    @GetMapping(value = "/user/credit/{id}")
    public Integer credit( @PathVariable(name = "id",value = "id") Integer id){
        Integer credit = userService.credit(id);
        return credit;
    }


}
