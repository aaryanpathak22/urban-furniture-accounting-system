package com.urbanfurniture.accounting.dto;

public class AccountResponse {

    private final String id;

    private final String accountName;

    private final String accountType;

    private final Double balance;

    private final String status;


    public AccountResponse(
            String id,
            String accountName,
            String accountType,
            Double balance,
            String status
    ) {
        this.id = id;
        this.accountName = accountName;
        this.accountType = accountType;
        this.balance = balance;
        this.status = status;
    }


    public String getId() {
        return id;
    }


    public String getAccountName() {
        return accountName;
    }


    public String getAccountType() {
        return accountType;
    }


    public Double getBalance() {
        return balance;
    }


    public String getStatus() {
        return status;
    }
}