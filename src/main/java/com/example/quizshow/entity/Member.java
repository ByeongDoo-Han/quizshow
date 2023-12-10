package com.example.quizshow.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Member {

    @Id
    private Long id;

    private String name;
    private Integer speedQuizScore;
    private Integer wordQuizScore;
    private Integer commonKnowledgeQuizScore;

}
