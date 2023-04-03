package com.demo.jerryrestaurant.entity;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class HistoryOrder {
    /**
     * order id
     */
    private Integer id;

    /**
     * restaurant id
     */
    private Integer rid;

    /**
     * img url
     */
    private String img;

    /**
     * title
     */
    private String title;


    /**
     * user id
     */
    private Integer uid;

    /**
     * create_date
     */
    private LocalDate createDate;

    /**
     * credit
     */
    private Integer credit;

    /**
     * total calorie kcal
     */
    private Integer totalKcal;

    /**
     * total price
     */
    private Integer totalPrice;

    /**
     * create_time
     */
    private LocalDateTime createTime;
}
