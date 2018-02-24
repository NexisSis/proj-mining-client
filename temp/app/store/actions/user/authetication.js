import axios from 'axios';
import setAuthorizationToken from 'app/utils/setAuthorizationToken';
import {SET_CURRENT_USER} from "app/store/constants/user";

export function setCurrentUser(isAuth) {
    return{
        type: SET_CURRENT_USER,
        isAuth
    };
}

export function authentication(user) {
    return dispatch => {
        console.log(user);
        localStorage.setItem('token', 'testtokeeeen');
        setAuthorizationToken('testtokeeeen');
        dispatch(setCurrentUser({isAuth: true}));
        return true;

    };
}
function security() {

}

function logout() {

}