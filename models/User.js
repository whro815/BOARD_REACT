const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        type: String
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
    }

});

const User = mongoose.model('User', userSchema);

module.exports = { User }