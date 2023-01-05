package com.example.api.mappers;

import com.example.api.dto.ArticleDTO;
import com.example.api.entities.Article;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class ArticleMapperImpl {

    public ArticleDTO fromArticle(Article article){
        ArticleDTO articleDTO=new ArticleDTO();
        BeanUtils.copyProperties(article,articleDTO);
        return  articleDTO;
    }
}
