# Smart Brain API

This is the Node.js/Express backend API for the Smart Brain face recognition application.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your PostgreSQL database and update connection details in `server.js`

3. Start the server:
   ```bash
   npm start
   ```

The API will be available at http://localhost:3000

## API Endpoints

- `GET /` - Health check
- `POST /signin` - Authenticate user
- `POST /register` - Register new user
- `GET /profile/:id` - Get user profile
- `PUT /image` - Update user entries