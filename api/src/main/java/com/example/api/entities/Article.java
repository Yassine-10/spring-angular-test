package com.example.api.entities;





import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@Entity
@Data @AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="articles")
public class Article implements Serializable {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private String picture;
    @ManyToOne
    private Order order;

}
