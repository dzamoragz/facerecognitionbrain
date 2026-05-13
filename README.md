# Smart Brain Face Recognition

A full-stack web application that detects faces in images using the Clarifai API. Users can register, sign in, upload images, and see face detections with bounding boxes.

## Features

- User registration and authentication
- Image upload and face detection
- Real-time face bounding boxes
- User ranking based on image submissions
- Responsive UI with particle background

## Tech Stack

### Frontend
- React 19
- Vite
- Tachyons (CSS framework)
- Particles-bg for background animation
- React Parallax Tilt for interactive effects

### Backend
- Node.js
- Express.js
- PostgreSQL
- Knex.js (query builder)
- bcrypt for password hashing
- CORS for cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- Clarifai API key (sign up at [Clarifai](https://clarifai.com/))

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/smart-brain.git
   cd smart-brain
   ```

2. Set up the backend:
   ```bash
   cd smart-brain-api
   npm install
   ```

3. Set up the frontend:
   ```bash
   cd ../smart-brain
   npm install
   ```

4. Create a PostgreSQL database named `smart-brain`

5. Create the necessary tables:
   - `users` table with columns: id (serial), name (varchar), email (varchar), entries (int), joined (timestamp)
   - `login` table with columns: id (serial), hash (varchar), email (varchar)

   You can use the following SQL:
   ```sql
   CREATE TABLE users (
     id serial PRIMARY KEY,
     name varchar(100),
     email text UNIQUE NOT NULL,
     entries bigint DEFAULT 0,
     joined timestamp DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE login (
     id serial PRIMARY KEY,
     hash varchar(100) NOT NULL,
     email text UNIQUE NOT NULL
   );
   ```

## Configuration

1. In `smart-brain-api/server.js`, update the database connection details if needed:
   ```javascript
   connection: {
       host: '127.0.0.1',
       user: 'postgres',
       password: 'your_password',
       database: 'smart-brain'
   }
   ```

2. In the frontend, you'll need to add your Clarifai API key. Check the FaceRecognition component for API integration.

## Running the Application

1. Start the backend server:
   ```bash
   cd smart-brain-api
   npm start
   ```
   The server will run on http://localhost:3000

2. Start the frontend development server:
   ```bash
   cd smart-brain
   npm run dev
   ```
   The app will be available at http://localhost:5173 (or similar Vite port)

## API Endpoints

- `GET /` - Test endpoint
- `POST /signin` - User sign in
- `POST /register` - User registration
- `GET /profile/:id` - Get user profile
- `PUT /image` - Increment user entries after image submission

## Usage

1. Register a new account or sign in with existing credentials
2. Enter an image URL in the input field
3. Click "Detect" to analyze the image
4. View the detected faces with bounding boxes
5. Check your rank based on the number of images processed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Face detection powered by [Clarifai API](https://clarifai.com/)
- UI inspired by the "Smart Brain" project from Andrei Neagoie's Zero to Mastery course</content>
<parameter name="filePath">c:\Users\dzamo\OneDrive\Documents\ZeroToMaster\facerecognitionbrain\README.md