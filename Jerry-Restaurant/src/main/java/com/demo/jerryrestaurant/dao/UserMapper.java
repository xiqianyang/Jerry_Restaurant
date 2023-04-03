package com.demo.jerryrestaurant.dao;

import com.demo.jerryrestaurant.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    void addUser(User user);

    User getUserByEmail(@Param("email") String email );

    void reset(@Param("id") Integer id, @Param("password") String password);


    Integer credit(@Param("id") Integer id);
}

