package com.example.quizshow.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class QuizController {

    @Value("${secret.code.speed1}")
    private String speed1;
//    @PostMapping("/speedquiz1")
//    public ModelAndView getSpeedQuiz1(@RequestBody String name){
//        ModelAndView mv = new ModelAndView("/resources/static/speed1.html");
//        return mv;
//    }
//    @PostMapping("/speedquiz2")
//    public ModelAndView getSpeedQuiz1(@RequestBody String secretCode){
//        ModelAndView mv = new ModelAndView("/resources/static/speed1.html");
//        if(secretCode.equals(speed1)) return mv;
//        else return null;
//    }

}
