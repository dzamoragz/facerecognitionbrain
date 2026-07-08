require('dotenv').config({ path: __dirname + '/.env' });

const express = require('express')
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');
const register =require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const PORT = process.env.PORT || 3000;


let db;
try {
  if (!process.env.DATABASE_URL) {
    console.error('WARNING: DATABASE_URL is not set in environment');
    db = null;
  } else {
    console.log('DATABASE_URL is present');

    db = knex({
      client: 'pg',
      connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      }
    });
  }
} catch (err) {
  console.error('knex initialization error:', err);
}





const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get('/',(req,res)=>{

    res.send('success')
})

app.post('/signin', (req,res)=> {signin.handleSignin(req, res, db, bcrypt)})

app.post('/register', (req,res) => {register.handleRegister(req, res, db, bcrypt)})

app.get('/profile/:id', (req,res) => {profile.handleProfileGet(req, res, db)})

app.put('/image',(req,res)=>{ image.handleImage(req, res, db)})

app.post('/imageurl',(req,res)=>{ image.returnClarifaiRequestOptions(req, res)})





if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;



