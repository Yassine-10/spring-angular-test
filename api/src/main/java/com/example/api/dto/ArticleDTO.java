package com.example.api.dto;


import com.example.api.entities.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class  ArticleDTO implements Serializable {
    private Long id;
    private String name;
    private double price;
    private String picture;
    private Order Order;


}
