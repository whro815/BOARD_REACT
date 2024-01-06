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

// 'methods' = model을 통해서
// 생성된 인스턴스에 정의되는 메서
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

// 'static' = model에 정의되는 메소드
userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    
    console.log('=== findByToken ===');
    
    console.log('token decode =' + token)

    jwt.verify(token, 'secretToken', function(err, decode){

        // 1. 유저 아이디를 이용해서 유저를 찾은 후
        // 2. 클라이언트에서 가져온 토큰과 
        // DB에 보관된 토큰이 일치하는지 확인
        // findOne (X) => findById
        console.log('decode='+decode);
        console.log('token='+token);

        if(err){
            console.log(`에러가 났습니다\n ${err}`);
            cb(err);
        }

        const result = user.findOne({'_id': decode, "token": token })
        .then((user)=>{
            console.log('user.findOne = '+ user);
            cb(err, user);
        })

    })
}

const User = mongoose.model('User', userSchema);


module.exports = { User }