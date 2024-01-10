import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action'

function LoginPage(props){
    
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmutHandler = (e) => {
        e.preventDefault(); // page refresh...

        console.log('Email', Email);
        console.log('Password', Password);

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(res => {
                if( res.payload.loginSuccess ){
                    navigate('/');
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
                    <label>비밀번호</label>
                    <input type='password' value={Password} onChange={onPasswordHandler}></input>
                    <br/>
                    <button>
                        Login
                    </button>
            </form>
        </div>
    )
}

export default LoginPage;