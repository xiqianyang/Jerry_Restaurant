package com.demo.jerryrestaurant.entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Restaurant {


    /**
     * restaurants id
     */
    private Integer id;

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
     * deliver_time unit mins
     */
    private Integer deliverTime;

    /**
     * create_time
     */
    private LocalDateTime createTime;


}
