import {AuthConstants} from "../../constants/user";

export function auth(state = {}, action) {
    switch (action) {
        case AuthConstants.LOGIN_REQUEST:
            return {
                type: "login",
                message: true
            };
        case AuthConstants.LOGIN_FAILURE:
            return {
                type: "logged_in",
                message: false
            };
        case AuthConstants.LOGIN_SUCCESS:
            return {
                type: "logged_in",
                message: true
            };
        default:
            return state;
    }
}