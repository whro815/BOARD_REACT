import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { joinUser } from '../../../_actions/user_action'

function RegisterPage() {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onNameHandler = (e) => {
      setName(e.currentTarget.value);
    }

    const onConfirmPasswordHandler = (e) => {
      setConfirmPassword(e.currentTarget.value);
    }

    const onSubmutHandler = (e) => {
        e.preventDefault(); // page refresh...

        console.log('Email', Email);
        console.log('Password', Password);

        if(Password !== ConfirmPassword){
          return alert('비밀번호와 비밀번호 불일치 >');
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(joinUser(body))
            .then(res => {
              console.log('res.payload.joinSuccess ='+ res.payload.joinSuccess)
                if( res.payload.joinSuccess ){
                    navigate('/login');
                } else {
                    alert('Error');
                }
            })

    }

  return (
    <div style={{
            display:'flex'
            , width:'100%'
            , height:'100vh'
            , justifyContent:'center'
            , alignItems:'center'}}>
            
            <form style={{ display:'flex', flexDirection:'column' }}
                onSubmit={onSubmutHandler}
            >
                    <label>이메일</label>
                    <input type='email' value={Email} onChange={onEmailHandler}></input>

                    <label>이름</label>
                    <input type='text' value={Name} onChange={onNameHandler}></input>

                    <label>비밀번호</label>
                    <input type='password' value={Password} onChange={onPasswordHandler}></input>

                    <label>비밀번호 확인</label>
                    <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>

                    <br/>
                    <button>
                        SignUp
                    </button>
            </form>
        </div>
  )
}

export default RegisterPage