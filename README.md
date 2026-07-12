# Automatic ITR Filing Web App

A comprehensive web application for automated Income Tax Return (ITR) filing in India with support for all ITR forms (ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, ITR-6, ITR-7).

## Features

### Current Version (MVP)
- User authentication (JWT-based)
- Form selection based on income type
- Data entry for multiple income sources
- Automatic calculations (deductions, tax liability)
- Document upload and management
- Draft saving and auto-save
- PDF generation of completed forms
- E-filing integration ready
- Multi-year return management
- Compliance validation

### Supported ITR Forms
- **ITR-1 (SAHAJ)**: Resident individuals with income up to ₹50 lakh
- **ITR-2**: Individuals/HUF without business income
- **ITR-3**: Individuals/HUF with business/profession income
- **ITR-4 (SUGAM)**: Presumptive income schemes
- **ITR-5**: Partnership firms, LLPs, AOPs, BOIs
- **ITR-6**: Companies (non-charitable)
- **ITR-7**: Trusts, political parties, institutions

## Tech Stack

### Frontend
- React 18+ with TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router v6
- Axios (HTTP client)
- React Hook Form
- Redux Toolkit

### Backend
- Node.js + Express.js
- TypeScript
- PostgreSQL (database)
- Prisma ORM
- JWT authentication

## Quick Start

```bash
# Clone repo
git clone https://github.com/row121209-alt/automatic-itr-filing.git
cd automatic-itr-filing

# Backend setup
cd server
npm install
cp .env.example .env
npm run db:migrate
npm run dev

# Frontend setup (new terminal)
cd client
npm install
npm run dev
```

## Documentation

- [API Documentation](docs/API.md)
- [Supported Forms](docs/FORMS.md)
- [Setup Guide](docs/SETUP.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## License

MIT License