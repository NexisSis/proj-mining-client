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
                if (response.data.error != undefined) {
                    if (response.data.error.message != undefined) {
                        return false;
                    }
                }else if (response.data.result != undefined) {
                    if(response.data.result.token != undefined){
                        localStorage.setItem('token', response.data.result.token);
                        setAuthorizationToken(response.data.result.token);
                        dispatch(setCurrentUser({isAuth: true}));
                    }else{
                        console.log('no token from server');
                    }
                    return true;
                }else {
                    return false;
                }

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