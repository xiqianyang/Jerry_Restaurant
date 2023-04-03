package com.demo.jerryrestaurant.entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class User {

    /**
     * user id
     */
    private Integer id;

    /**
     * title
     */
    private String title;
    /**
     * password
     */
    private String password;

    /**
     * address
     */
    private String address;

    /**
     * email
     */
    private String email;

    /**
     * create_time
     */
    private LocalDateTime createTime;
}
