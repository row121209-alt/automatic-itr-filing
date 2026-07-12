# Deployment Guide

## Options

### 1. Vercel (Frontend) + Railway (Backend)

#### Vercel
1. Push to GitHub
2. Connect Vercel
3. Set root directory: `client`
4. Deploy

#### Railway
1. Create new project
2. Deploy from GitHub
3. Add PostgreSQL database
4. Set environment variables
5. Deploy

### 2. Docker

Create docker-compose.yml and run:
```bash
docker-compose up
```

### 3. AWS

Use EC2 + RDS PostgreSQL

## Production Checklist
- [ ] Database backups
- [ ] SSL certificate
- [ ] Environment variables
- [ ] Rate limiting
- [ ] CORS config
- [ ] Error logging