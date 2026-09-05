package com.urbanfurniture.accounting.accounting.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.accounting.dto.AccountRequest;
import com.urbanfurniture.accounting.accounting.dto.AccountResponse;
import com.urbanfurniture.accounting.accounting.model.Account;
import com.urbanfurniture.accounting.accounting.repository.AccountRepository;

@Service
public class AccountService {

    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public AccountResponse createAccount(AccountRequest request) {

        if (accountRepository.existsByCode(request.code())) {
            throw new RuntimeException("Account with this code already exists");
        }

        Account account = Account.builder()
                .code(request.code())
                .name(request.name())
                .type(request.type())
                .description(request.description())
                .parentAccountId(request.parentAccountId())
                .active(true)
                .build();

        return toResponse(accountRepository.save(account));
    }

    public List<AccountResponse> getAllAccounts() {

        return accountRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public AccountResponse getAccountById(String id) {

        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        return toResponse(account);
    }

    public AccountResponse updateAccount(
            String id,
            AccountRequest request) {

        Account existingAccount = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        if (!existingAccount.getCode().equals(request.code())
                && accountRepository.existsByCode(request.code())) {

            throw new RuntimeException("Account with this code already exists");
        }

        existingAccount.setCode(request.code());
        existingAccount.setName(request.name());
        existingAccount.setType(request.type());
        existingAccount.setDescription(request.description());
        existingAccount.setParentAccountId(request.parentAccountId());

        return toResponse(accountRepository.save(existingAccount));
    }

    public void deleteAccount(String id) {

        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        accountRepository.delete(account);
    }

    private AccountResponse toResponse(Account account) {

        return new AccountResponse(
                account.getId(),
                account.getCode(),
                account.getName(),
                account.getType(),
                account.getDescription(),
                account.getParentAccountId(),
                account.isActive()
        );
    }
}