package com.example.api.entities;



import javax.persistence.*;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;



@Entity
@Data @AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="orders")

public class Order implements Serializable {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String reference;
    @OneToMany(mappedBy="order")
    @JsonProperty(access= JsonProperty.Access.WRITE_ONLY)
    private List<Article> articles;
    private Date date;

}

