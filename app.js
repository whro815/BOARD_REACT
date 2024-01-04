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

app.use(cookieParser());

// MongoDB
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {})
        .then(() => console.log('MongoDB conected'))
        .catch((err) => { console.log(err); });

// Main
app.get('/', async (req, res) => {
});

// User
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})