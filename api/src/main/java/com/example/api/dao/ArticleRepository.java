package com.example.api.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.api.entities.Article;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {


}
