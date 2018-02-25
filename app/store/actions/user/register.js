import {RegisterConstants} from "app/store/constants";
import axios from 'axios';
import Register from "app/services/Register";
import {Host, Port} from "api";

export const actions = {
    signup,
    confirm,
    resendConfirm
};

export function signup(userData) {
    return dispatch => {
        return new Register({request: axios})
            .signup(userData.email, userData.password, userData.passwordConfirmation, userData.country);
    };
}

export function confirm(userData) {
    return dispatch => {
        return new Register({request: axios})
            .confirm(userData);
    };
}

function resendConfirm() {
    return dispatch => {
        return new Register({request: axios})
            .resendConfirm(userData.email);
    };
}