import {
    LOGIN_USER, JOIN_USER, LOGOUT_USER
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
        default:
            return state;
    }
}