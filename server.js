const express = require('express');
const app = express();

const cors = require('cors');
const port = 5000;

const {User} = require("./models/User");
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
mongoose.connect(config.mongoURI, {})
        .then(() => console.log('MongoDB conected'))
        .catch((err) => { console.log(err); });


  app.get('/', async (req, res) => {
        // 회원가입 client
        console.log('hi')
  })

  app.post('/register', async (req, res) => {

      // 회원가입 client > server 데이터 저장
      const user = new User(req.body);

      //mongoDB 메서드, user모델에 저장
      const result = await user.save().then(()=>{
        res.status(200).json({
          success: true
        })
      }).catch((err)=>{
        res.json({ success: false, err })
      })

  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })