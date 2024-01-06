// Middle_Ware
// User model
const { User } = require("../models/User");

// 회원가입
exports.registerPostMid = async (req, res) => {
    console.log('==registerPostMid==');
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
  console.log('==loginPostMid==');
  // 요청된 이메일을 DB 에서 있는지 확인
  
  User.findOne({ email : req.body.email })
    .then(user=>{
      console.log('user = ',user);
        if(!user) {
            return res.json({
              loginSuccess: false,
              message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
      console.log('req.body.passwod =' + req.body.password)
      // 요청된 이메일이 DB에 있다면 비밀번호가 맞는 비밀번호인지 확인
      user.comparePassword(req.body.password, (err, isMatch) => {
          console.log('isMatch 도착 =' + isMatch)
          // 비밀번호 불일치
          if(!isMatch) {
            console.log('!isMatch = ',isMatch);
            return res.json({loginSuccess: false, message:"비밀번호가 틀렸습니다."})
          }
          
           //비밀번호까지 맞다면 token 생성
          user.generateToken((err, user) => {
            console.log('generateToken = ',user);
            //mongoDB 메서드, user모델에 저장
            const result = user.save().then(()=>{
              // token where? cookie, local stoarge 등등
                res.cookie("user_auth", user)
                .status(200)
                .json({loginSuccess: true, userId: user._id}) 
            }).catch((err)=>{
              res.json({ success: false, err })
            })
          
          }) 

      })
      
    }).catch((err)=>{
      console.log("err= " + err);
      return res.status(400).send(err);
    })

};

/** Auth controler(MiddleWare) */
exports.authGetMid = async (req, res) => {

  console.log('==authGetMid==');
  // 이 스테이지 미들웨어를 통과
  // auth == true
  
  res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: ture,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      image: req.user.image
  })

}

// 로그아웃 
exports.logoutGetMid = async (req, res) => {
    console.log('===logoutGetMid===');

    console.log('req.user =' + JSON.stringify(req.user));
    console.log('req.user._Id =' + req.user._id);

    User.findOneAndUpdate({ id: req.user._id },{ token: "" })
        .then(user=>{
          return res.status(200).send({
            success : true
          });
    }).catch((err) => {
          res.json({success : false, err});
    })

}