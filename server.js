const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

app.use(cors());

app.get('/api', async (req, res) => {
  res.send([{
    'id':1,
    'name' : '홍길동',
    'birthday' : '950529',
    'gender' : '남자',
    'job' : '직장인',
  },
  {
    'id':2,
    'name' : '홍길이',
    'birthday' : '950530',
    'gender' : '여자',
    'job' : '대학생',
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})