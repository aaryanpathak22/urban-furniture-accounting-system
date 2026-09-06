package com.urbanfurniture.accounting.controller;



import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.dto.AccountResponse;
import com.urbanfurniture.accounting.service.AccountService;



@RestController
@RequestMapping("/api/accounts")
@CrossOrigin("*")
public class AccountController {


    private final AccountService accountService;



    public AccountController(AccountService accountService){

        this.accountService = accountService;

    }



    @GetMapping
    public List<AccountResponse> getAccounts(){

        return accountService.getAllAccounts();

    }


}