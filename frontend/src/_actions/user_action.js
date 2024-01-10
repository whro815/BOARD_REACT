import axios from 'axios'
import {
    LOGIN_USER
} from './types';


export function loginUser(dataToSubmit){

    const req = axios.post('/user/login', dataToSubmit)
                    .then(res =>{
                         console.log(res.data);
                         return res.data;
                    });

    console.log(req);

    return{
        type: "LOGIN_USER",
        payload: req
    }

}