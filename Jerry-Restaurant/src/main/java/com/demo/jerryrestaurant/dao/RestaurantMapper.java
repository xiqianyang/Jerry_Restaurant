package com.demo.jerryrestaurant.dao;

import com.demo.jerryrestaurant.entity.Food;
import com.demo.jerryrestaurant.entity.HistoryOrder;
import com.demo.jerryrestaurant.entity.Order;
import com.demo.jerryrestaurant.entity.Restaurant;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RestaurantMapper {

    List<Restaurant> pageList();

    List<Food> foodList(@Param("id") Integer id);

    // Integer checkout(Order order);

    List<HistoryOrder> getOrders(@Param("id") Integer id);

    void checkout(Order order);
}
