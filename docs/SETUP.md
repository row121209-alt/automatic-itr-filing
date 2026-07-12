# Setup Guide

## Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Installation

### 1. Backend Setup
```bash
cd server
npm install
cp .env.example .env
```

Edit `.env`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/itr_filing
JWT_SECRET=your_secret_key
```

### 2. Database Setup
```bash
npm run db:migrate
```

### 3. Start Backend
```bash
npm run dev
```

### 4. Frontend Setup
```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`
Backend runs on `http://localhost:5000`