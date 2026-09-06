package com.urbanfurniture.accounting.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.dto.AccountResponse;
import com.urbanfurniture.accounting.repository.AccountRepository;



@Service
public class AccountService {


    private final AccountRepository accountRepository;


    public AccountService(AccountRepository accountRepository) {

        this.accountRepository = accountRepository;

    }



    public List<AccountResponse> getAllAccounts() {


        return accountRepository.findAll()

                .stream()

                .map(account -> new AccountResponse(

                        account.getId(),

                        account.getName(),

                        account.getType(),

                        0.0,

                        account.isActive()
                                ? "Active"
                                : "Inactive"

                ))

                .toList();

    }


}