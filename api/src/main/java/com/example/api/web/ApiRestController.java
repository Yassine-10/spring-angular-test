package com.example.api.web;


import com.example.api.dao.ArticleRepository;
import com.example.api.dao.OrderRepository;
import com.example.api.dto.ArticleDTO;

import com.example.api.dto.OrderDTO;
import com.example.api.entities.Article;
import com.example.api.entities.Order;
import com.example.api.mappers.ArticleMapperImpl;
import com.example.api.mappers.OrderMapperImpl;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@CrossOrigin("*")
public class ApiRestController {
    @Autowired private ArticleRepository articleRepository;
    @Autowired private OrderRepository orderRepository;
    @Autowired private OrderMapperImpl orderMapper;
    @Autowired private ArticleMapperImpl articleMapper;


    @PostMapping(path="/articles")
    public ResponseEntity<ArticleDTO> createArticle(@RequestBody Article article) {
        Article savedArticle = articleRepository.save(article);
        ArticleDTO articleDto =  articleMapper.fromArticle(savedArticle);
        return ResponseEntity.ok(articleDto);
    }


    @GetMapping(path="/articles/{id}")
    public ResponseEntity<ArticleDTO> getArticleById(@PathVariable(value = "id") Long articleId)
           {
               Article article = articleRepository.findById(articleId).get();
               if (article == null) {
                   return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
               }
               ArticleDTO articleDto = articleMapper.fromArticle(article);
               return ResponseEntity.ok(articleDto);
    }
    @GetMapping(path="/articles")
    public ResponseEntity<List<ArticleDTO>> getAllArticles(){
        List<Article> articles=articleRepository.findAll();
        if (articles.isEmpty()) {
            return ResponseEntity.ok(new ArrayList<>());
        }

      List<ArticleDTO> articleDTOS = new ArrayList<>();
              articles.stream().forEach(article -> {
               articleDTOS.add(articleMapper.fromArticle(article))   ;
      });

        return ResponseEntity.ok(articleDTOS);
    }
    @GetMapping(path="/orders")
    public ResponseEntity<List<OrderDTO>> getAllOrders(){
        List<Order> orders=orderRepository.findAll();
        if(orders.isEmpty()){
            return ResponseEntity.ok(new ArrayList<>());
        }
      List<OrderDTO> orderDTOS=new ArrayList<>();
      orders.stream().forEach(order -> {
          orderDTOS.add(orderMapper.fromOrder(order));
      });
        return ResponseEntity.ok(orderDTOS);

    }
    @PostMapping(path="/orders")
    public ResponseEntity<OrderDTO> creatOrder(@RequestBody Order order ){
        Order savedOrder = orderRepository.save(order);
        order.getArticles().forEach(a -> {
            Article article=articleRepository.findById(a.getId()).get();
            article.setOrder(savedOrder);
           articleRepository.save(article);
        });
        OrderDTO orderDto =  orderMapper.fromOrder(savedOrder);
        return ResponseEntity.ok(orderDto);
    }
    @PutMapping(path="/orders/{id}")
    public ResponseEntity<OrderDTO> updateOrder(@PathVariable(value = "id") Long orderId,@RequestBody Order order){
        Order updatedOrder=orderRepository.findById(orderId).get();
        if (updatedOrder == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        updatedOrder.getArticles().forEach(a -> {
            Article article=articleRepository.findById(a.getId()).get();
             article.setOrder(null);
             articleRepository.save(article);
        });
        List <Article> articles=new ArrayList<>();
        order.getArticles().forEach(a -> {
            Article article=articleRepository.findById(a.getId()).get();
            articles.add(article);
            article.setOrder(updatedOrder);
            articleRepository.save(article);
        });

        orderRepository.save(updatedOrder);
        OrderDTO orderDTO=orderMapper.fromOrder(updatedOrder);
        return ResponseEntity.ok(orderDTO);
    }
    @GetMapping(path="/orders/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable(value = "id") Long orderId)
    {
       Order order = orderRepository.findById(orderId).get();
        if (order == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
       OrderDTO orderDTO = orderMapper.fromOrder(order);
        return ResponseEntity.ok(orderDTO);


    }

}
