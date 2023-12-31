package com.example.quizshow.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Member {

    @Id
    private Long id;
    private String name;
    private Integer score;

}
