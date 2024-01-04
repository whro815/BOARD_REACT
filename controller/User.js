// User model
const { User } = require("../models/User");

// 회원가입
exports.registerPostMid = async (req, res) => {
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
    
};

// 로그인
exports.loginPostMid = async (req, res) => {

  // 요청된 이메일을 DB 에서 있는지 확인
  // 요청된 이메일이 DB에 있다면 비밀번호가 맞는 비밀번호인지 확인

  // Token 생


};