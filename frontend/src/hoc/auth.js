import React, { useEffect } from 'react';
import axios  from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function (SpcificComponent, option, adminRoute = null){

    // option
    // null == any
    // true == login user o
    // fasle == login user x
    
    // adminRoute
    // null == any
    // true == admin user o
    // tuue == admin user x
    
    function AuthenticationCheck(props){

        const dispatch = useDispatch();

        let navigate = useNavigate();

        useEffect(() => {
            dispatch(auth()).then(res => {
                console.log(res);
                
                if(!res.payload.isAuth){    
                    // 로그인 하지 않은 상태
                    if(option){
                        navigate('/login');
                    }

                } else {    
                    // 로그인 한상태
                    if(adminRoute && !res.payload.isAuth){
                        navigate('/');
                    } else {
                        if(option === false){
                            navigate('/');
                        }
                    }
                }
            })
        }, [])
        
        return (
            <SpcificComponent {...props}/>
        )

    }

    return AuthenticationCheck;
}