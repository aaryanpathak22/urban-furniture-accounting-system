# Urban Furniture Accounting System - Backend

Spring Boot backend for the Urban Furniture Accounting System.

## Tech Stack

- Java 21
- Spring Boot 4
- Spring MVC
- Spring Data MongoDB
- MongoDB
- Spring Security
- Swagger/OpenAPI
- Maven

---

## Features

The backend provides REST APIs for:

- Contact Management
- Product Management
- Sales Orders
- Invoices
- Payments
- Journals
- Purchase Orders
- Vendor Bills
- Reports

---

## Project Structure

```
backend
│
├── controller
│   └── REST API endpoints
│
├── service
│   └── Business logic
│
├── repository
│   └── MongoDB repositories
│
├── model
│   └── Database entities
│
└── security
    └── Spring Security configuration
```

---

## Prerequisites

Install:

- Java 21
- MongoDB
- Maven

Verify:

```bash
java -version
```

```bash
mongod --version
```

---

## Running the Backend

Navigate to backend:

```bash
cd backend
```

Run:

```bash
./mvnw spring-boot:run
```

Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

Backend starts on:

```
http://localhost:8080
```

---

## Build and Test

Run:

```powershell
.\mvnw.cmd clean test
```

Expected:

```
BUILD SUCCESS
```

---

## Swagger Documentation

After starting the application:

Open:

```
http://localhost:8080/swagger-ui/index.html
```

Swagger provides interactive API documentation and testing.

---

## API Modules

### Contacts

```
/api/contacts
```

### Products

```
/api/products
```

### Sales Orders

```
/api/sales-orders
```

### Invoices

```
/api/invoices
```

### Payments

```
/api/payments
```

### Journals

```
/api/journals
```

### Purchase Orders

```
/api/purchase-orders
```

### Vendor Bills

```
/api/vendor-bills
```

### Reports

```
/api/reports
```

---

## Database

MongoDB collections:

- contacts
- products
- sales_orders
- invoices
- payments
- journals
- purchase_orders
- vendor_bills

---

## Security

Spring Security is configured for API access and Swagger documentation.

Swagger endpoints:

```
/swagger-ui/**
/v3/api-docs/**
```

---

## Developer Notes

Backend follows layered architecture:

```
Controller → Service → Repository → MongoDB
```

Business calculations such as invoice totals, tax calculations, and journal balancing are handled inside service classes.
