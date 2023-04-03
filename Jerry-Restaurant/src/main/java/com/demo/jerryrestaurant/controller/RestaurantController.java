package com.demo.jerryrestaurant.controller;
import com.demo.jerryrestaurant.entity.Food;
import com.demo.jerryrestaurant.entity.HistoryOrder;
import com.demo.jerryrestaurant.entity.Order;
import com.demo.jerryrestaurant.entity.Restaurant;
import com.demo.jerryrestaurant.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RestaurantController {
    // public List<Restaurant> pageList(@RequestParam(required = false, defaultValue = "0") int offset,
    //                                     @RequestParam(required = false, defaultValue = "10") int pagesize) {
    //     return restaurantsService.pageList(offset, pagesize);
    // }
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping(value = "/restaurant/pageList")
    public List<Restaurant> pageList() {
        List<Restaurant> records = restaurantService.pageList();
        return records;
    }

    //  this is restaurant id
    @GetMapping(value = "/restaurant/foodList/{id}")
    public List<Food> foodList(@PathVariable(value = "id") Integer id) {
        List<Food> records = restaurantService.foodList(id);
        return records;
    }

    @PostMapping("/restaurant/checkout")
    public Integer insert(@RequestBody Order order){
        order.setCreateDate(LocalDate.now());
        Integer result =restaurantService.checkout(order);
        return result;
    }

    // this is useer id

    @GetMapping(value = "/restaurant/historyorder/{id}")
    public List<HistoryOrder> getOrders(@PathVariable(value = "id") Integer id){
        List<HistoryOrder> results = restaurantService.getOrders(id);
        return results;
    }


}
