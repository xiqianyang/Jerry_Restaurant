package com.demo.jerryrestaurant.service;


import com.demo.jerryrestaurant.dao.RestaurantMapper;
import com.demo.jerryrestaurant.entity.Food;
import com.demo.jerryrestaurant.entity.HistoryOrder;
import com.demo.jerryrestaurant.entity.Order;
import com.demo.jerryrestaurant.entity.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    private RestaurantMapper restaurantMapper;
    public List<Restaurant> pageList(){
        List<Restaurant> records = restaurantMapper.pageList();
        System.out.println("records "+records);

        return records;
    }

    public List<Food> foodList(Integer id){
        List<Food> records = restaurantMapper.foodList(id);
        return  records;
    }

    public Integer checkout(Order order){
        restaurantMapper.checkout(order);
        Integer result = order.getId();
        return  result;
    }


    public List<HistoryOrder>  getOrders(Integer id){
        List<HistoryOrder> result = restaurantMapper.getOrders(id);
        return result;
    }
}