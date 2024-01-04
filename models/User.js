const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength:5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 유저과 관리자 or 일반
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String,
        maxlength: 500
    },
    tokenExp:{
        type: Number
    }
});

// save 전에 선 처리
userSchema.pre('save', function( next ){
    
    var user =this;

    if(user.isModified('password')){    // 비밀번호 변경시
        
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {

            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                
                if(err) return next(err);

                user.password = hash;   
                next();
            });
        });
    } else {
        next();
    }

});

userSchema.methods.comparePassword = function(plainPassword, cb){

    var user = this;
    // 내가 입력한 비밀번호와 = 암호화된 비밀번호 일치하는지 확인 (복호화 불가능 x)
    bcrypt.compare(plainPassword, user.password, function(err, isMatch) {
        if(err) return (err);
        console.log("model schema =" + plainPassword)
        console.log("model schema =" + user.password)
        console.log("model schema =" + isMatch)
        cb(err,isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {

    var user = this;

    console.log('schema ='+ user);
    // jsonwebtoken 사용해서 생성
    // 1. user._id + 'secretToken' = token 
    // 2. => secretToken -> user._id가 누구인지 알수있음
    // 3.  jwt.sign(payload, secretKey), payload는 string형식
    var token = jwt.sign(user._id.toHexString(), 'secretToken',function(err, token){
        // 생성된 토큰을 db에 저장
        user.token = token
        console.log(user.token);
        cb(err,user);
    })
   
}


userSchema.static.findByToken = function(token, cb) {
    var user = this;
    
    // token decode
    jwt.verify(token, 'secretToken', function(err, decode){

        // 유저 아이디를 이용해서 유저를 찾은 후
        // 클라이언트에서 가져온 토큰과 
        // DB에 보관된 토큰이 일치하는지 확인
        user.fundOne({'_id' : decode, "token": token}, function(err, user){
            if(err) return cb(err);
            cb(null, user)
        })
        
    })
}

const User = mongoose.model('User', userSchema);

module.exports = { User }