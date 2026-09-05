package com.urbanfurniture.accounting.auth.service;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.auth.dto.LoginRequest;
import com.urbanfurniture.accounting.auth.dto.RegisterRequest;
import com.urbanfurniture.accounting.auth.model.User;
import com.urbanfurniture.accounting.auth.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;


    public User register(RegisterRequest request) {

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();

        return userRepository.save(user);
    }


    public User login(LoginRequest request) {

        return userRepository.findByEmail(request.getEmail())
                .filter(user -> user.getPassword().equals(request.getPassword()))
                .orElseThrow(() -> 
                    new RuntimeException("Invalid email or password"));
    }
}