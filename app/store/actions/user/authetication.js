import axios from 'axios';
import setAuthorizationToken from 'app/utils/setAuthorizationToken';
import {SET_CURRENT_USER} from "app/store/constants/user";
import Auth from "app/services/Auth";

export function setCurrentUser(isAuth) {
    return{
        type: SET_CURRENT_USER,
        isAuth
    };
}

export function authentication(userData) {
    return dispatch => {
           /* return new Auth({request:axios})
                .auth(userData.email,userData.password).then(response =>{
                console.log(user);
                localStorage.setItem('token', 'testtokeeeen');
                setAuthorizationToken('testtokeeeen');
                dispatch(setCurrentUser({isAuth: true}));
                return true;
        });*/
        localStorage.setItem('token', 'testtokeeeen');
        setAuthorizationToken('testtokeeeen');
        dispatch(setCurrentUser({isAuth: true}));
        return true;
    };

}
function security() {

}

export function logout() {
    return dispatch => {
        localStorage.removeItem('token');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    };
}