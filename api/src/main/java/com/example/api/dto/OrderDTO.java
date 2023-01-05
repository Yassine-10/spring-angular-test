package com.example.api.dto;

import com.example.api.entities.Article;
import com.example.api.entities.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class  OrderDTO implements Serializable {


    private Long id;
    private String reference;
    private List<Article> articles;
    private Date date;



}