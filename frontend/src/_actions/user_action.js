import axios from 'axios'
import {
    LOGIN_USER, JOIN_USER, LOGOUT_USER, AUTH_USER
} from './types';

export function loginUser(dataToSubmit){
    const req = axios.post('/user/login', dataToSubmit)
                    .then(res =>{
                         console.log(res.data);
                         return res.data;
                    });

    return{
        type: "LOGIN_USER",
        payload: req
    }
}

export function joinUser(dataToSubmit){
    const req = axios.post('/user/register', dataToSubmit)
                    .then(res =>{
                         console.log(res.data);
                         return res.data;
                    });

    return{
        type: "JOIN_USER",
        payload: req
    }
}

export function logoutUser(){
    const req = axios.get('/user/logout')
                    .then(res =>{
                         console.log(res.data);
                         return res.data;
                    });

    return{
        type: "LOGOUT_USER",
        payload: req
    }
}

export function auth(){
    const req = axios.get('/user/auth')
                    .then(res =>{
                         console.log('auth =' + res.data);
                         return res.data;
                    });

    return{
        type: "AUTH_USER",
        payload: req
    }
}