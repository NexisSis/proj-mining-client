import setAuthorizationToken from 'app/utils/setAuthorizationToken';
import {SET_CURRENT_USER} from "app/store/constants/user";

export function resetPassword(userData) {
    return dispatch => {
        return new Reset({request: axios})
            .auth(userData.email, userData.password).then(response => {
                console.log(user);
                localStorage.setItem('token', 'testtokeeeen');
                setAuthorizationToken('testtokeeeen');
                dispatch(setCurrentUser({isAuth: true}));
                return true;
            });
    };

}

export function resetPasswordConfirm(userData) {
    return dispath => {
        return new Reset({request: axios})
            .auth(userData.token,userData.password,userData.password_confirmation);
    };
}