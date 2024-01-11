import {
    LOGIN_USER, JOIN_USER, LOGOUT_USER, AUTH_USER
} from '../_actions/types';

export default function (state= {}, action) {
    
    switch (action.type) {
        case LOGIN_USER:
            return{...state, loginSuccess: action.payload}
            break;
        case JOIN_USER:
            return{...state, joinSuccess: action.payload}
            break;
        case LOGOUT_USER:
            return{...state, logoutSuccess: action.payload}
            break;
        case AUTH_USER:
            return{...state, userData: action.payload}
            break;
        default:
            return state;
    }
}