import setAuthorizationToken from 'app/utils/setAuthorizationToken';
import {SET_CURRENT_USER} from "app/store/constants/user";

function test2(isAuth) {
    return{
        type: SET_CURRENT_USER,
        isAuth
    };
}
export function test(isAuth) {
    return dispatch => {
        dispatch(test2(isAuth));
    };
}