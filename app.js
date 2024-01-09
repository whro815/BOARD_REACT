const express = require('express');
const app = express();

const cors = require('cors');
const port = 5000;

// user router
const userRouter = require("./routes/User");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// secret info
const config = require('./config/key');

// Cross-Origin Resource Sharing
app.use(cors());   

// Application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Application/json
app.use(bodyParser.json());

// Cookie
app.use(cookieParser());

// MongoDB
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {})
        .then(() => console.log('MongoDB conected'))
        .catch((err) => { console.log(err); });

// Main
app.get('/', async (req, res) => {
});

// hello test ( 페이지가 아니라 api 호출...)
app.get('/hello', async (req, res) => {
  res.send('안녕');
});

// User
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})