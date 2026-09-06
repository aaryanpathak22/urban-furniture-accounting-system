# Urban ERP Frontend

A modern React + TypeScript frontend application for the Urban ERP accounting platform.

The application provides a user-friendly interface for managing business operations including:

- Dashboard overview
- Contacts management
- Product management
- Chart of Accounts
- Sales Orders
- Invoices
- Payments
- Purchase Orders
- Vendor Bills
- Journals
- Ledger
- Reports
- Settings

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Axios
- CSS

## Project Structure

```
src/
│
├── api/
│   └── services/ # Backend API integration services
│
├── components/
│   └── Charts/ # Dashboard visualizations
│
├── pages/ # Application pages
│
├── App.tsx # Main application routing
└── main.tsx # Application entry point
```

## Prerequisites

Install:

- Node.js 18+
- npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

## Running the Application

Start development server:

```bash
npm run dev
```

Application will start at:

```
http://localhost:5173
```

## Backend Connection

The frontend communicates with the Spring Boot backend APIs running at:

```
http://localhost:8080
```

Example APIs:

```
GET /api/accounts
GET /api/products
GET /api/contacts
```

## Build for Production

Create production build:

```bash
npm run build
```

## Features

### Dashboard

- Business overview
- Revenue charts
- Payment insights

### Accounting

- Account management
- Journal entries
- Ledger tracking

### Sales & Purchase

- Orders
- Invoices
- Vendor bills
- Payments

### Master Data

- Contacts
- Products

## Future Enhancements

- Authentication and authorization
- Role based access
- Advanced financial analytics
- AI assisted accounting insights
