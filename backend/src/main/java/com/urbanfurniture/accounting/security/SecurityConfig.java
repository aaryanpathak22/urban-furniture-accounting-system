package com.urbanfurniture.accounting.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                    .requestMatchers(
                            "/api/contacts/**",
                            "/api/products/**",
                            "/api/accounts/**",
                            "/api/journals/**",
                            "/api/sales-orders/**",
                            "/api/invoices/**",
                            "/api/purchase-orders/**",
                            "/api/vendor-bills/**",
                            "/api/auth/**"
                    ).permitAll()
                    .anyRequest().authenticated()
            );

        return http.build();
    }
}