import axios from 'axios';
import setAuthorizationToken from 'app/utils/setAuthorizationToken';
import {SET_CURRENT_USER} from "app/store/constants/user";
import Auth from "app/services/Auth";
import {Reset} from "app/services/Reset";

export function setCurrentUser(isAuth) {
    return {
        type: SET_CURRENT_USER,
        isAuth
    };
}

export function signin(userData) {
    return dispatch => {
        return new Auth({request: axios})
            .signin(userData.email, userData.password)
            .then(response => {
                console.log(user);
                localStorage.setItem('token', 'testtokeeeen');
                setAuthorizationToken('testtokeeeen');
                dispatch(setCurrentUser({isAuth: true}));
                return true;
            });
    };

}

export function security(securityData) {
    return dispatch => {
        return new Auth({request: axios})
            .security(securityData.token, securityData.code)
            .then(response => {
                //@TODO: ADD STATE SECURITY TOKEN SEND
            });
    };
}

export function logout() {
    return dispatch => {
        return new Auth({request: axios})
            .signout()
            .then(response => {
                //@TODO: REMOVE TOKEN AND SET STATE USER SIGNOUT
                localStorage.removeItem('token');
                setAuthorizationToken(false);
                dispatch(setCurrentUser({}));
            });
    };
}