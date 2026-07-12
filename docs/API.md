# API Documentation

## Base URL
`http://localhost:5000/api`

## Authentication
All protected endpoints require JWT token in Authorization header.

## Endpoints

### Auth
- `POST /auth/register` - Register user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

### Returns
- `GET /returns` - List all returns
- `POST /returns` - Create new return
- `GET /returns/:id` - Get return details
- `PUT /returns/:id` - Update return
- `DELETE /returns/:id` - Delete return

### Forms
- `GET /forms` - List all forms
- `GET /forms/:type` - Get form schema

### Documents
- `POST /documents/upload` - Upload document
- `GET /documents/:id` - Download document
- `DELETE /documents/:id` - Delete document

## Error Format
```json
{
  "success": false,
  "message": "Error description"
}
```