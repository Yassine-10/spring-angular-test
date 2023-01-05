package com.example.api.mappers;


import com.example.api.dto.OrderDTO;

import com.example.api.entities.Order;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class OrderMapperImpl {
    public OrderDTO fromOrder(Order order){
        OrderDTO orderDTO=new OrderDTO();
        BeanUtils.copyProperties(order,orderDTO);
        return  orderDTO;

    }
}
