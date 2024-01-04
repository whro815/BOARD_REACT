const { User } = require('../models/User');

let auth = (req, res, next) => { 
    console.log("인증 처리를 하는곳");
    
    // client get cookie token 
    let token = req.cookies.x_auth;
    
    // token decry after get userinfo 
    User.findByToken(token, (err, user) =>{
        if(err) throw err;
        if(!user) return res.json({ isAuth:false, error:true })
        
        // 미들웨어 다음에서 재사용을 위해
        // req 에 담는
        req.token = token;
        req.user = userl;
        next(); // 미들웨어에서 다음으로 넘어가게...
    })

}

module.exports = { auth };