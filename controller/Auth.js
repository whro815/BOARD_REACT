const { User } = require('../models/User');

let auth = (req, res, next) => { 
    console.log("인증 처리를 하는곳");

    // client get cookie token 
    // user info ( saved cookie )
    let user = req.cookies.user_auth;

    console.log('인증 처리 token = '+ user.token);
    
    // token decry after get userinfo 
    User.findByToken(user.token, (err, user) =>{
        console.log('auth findByToken=='+ user);
        if(err) throw err;
        if(!user) return res.json({ isAuth:false, err })
        
        // 미들웨어 다음에서 재사용을 위해
        // req 에 담는
        req.token = user.token;
        req.user = user;
        console.log('req.token'+req.token);
        console.log('req.user'+req.user);
        next(); // 미들웨어에서 다음으로 넘어가게...
    })


}

module.exports = { auth };