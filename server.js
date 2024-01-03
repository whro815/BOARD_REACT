const express = require('express');
const app = express();

const cors = require('cors');
const port = 5000;

const {Costomer} = require("./models/User");
const bodyParser = require("body-parser");

const config = require('./config/key');

// Cross-Origin Resource Sharing
app.use(cors());   

// Application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Application/json
app.use(bodyParser.json());

// MongoDB
const mongoose = require('mongoose');
mongoose
.connect(config.mongoURI, {})
  .then(() => console.log('MongoDB conected'))
  .catch((err) => { console.log(err); });


  app.get('/', async (req, res) => {
        // 회원가입 client
        console.log('hi')
  })

  app.post('/register', async (req, res) => {

      // 회원가입 client > server 데이터 저장
      const customer = new Costomer(req.body);

      customer.save((err, doc) =>{

          if(err) return res.json({ success: false, err});

          return res.status(200).json({
            success: true
          })

      });

  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })