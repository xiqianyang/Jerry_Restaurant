package com.demo.jerryrestaurant.entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Food {
    /**
     * food id
     */
    private Integer id;

    /**
     * restaurant id
     */
    private Integer rid;

    /**
     * title
     */
    private String title;

    /**
     * description
     */
    private String des;

    /**
     * img url
     */
    private String img;

    /**
     * price
     */
    private Integer price;

    /**
     * calorie kcal
     */
    private Integer kcal;

    /**
     * create_time
     */
    private LocalDateTime createTime;

}