import {RegisterConstants} from "app/store/constants";
import axios from 'axios';
import Register from "app/services/Register";
import Confirm from "app/services/Confirm";
import ResendConfirmation from "app/services/ResendConfirmation";
import {Host,Port} from "api";

export const actions = {
    signup,
    confirm,
    resendConfirm
};

export function signup(userData){
    return dispatch => {
        return new Register({request:axios})
           .signup(userData.email,userData.password,userData.passwordConfirmation,userData.country);
    };
}

function confirm(userData) {
    return dispatch => {
    //    return new Confirm({request:axios})
       //     .confirm(userData.token);
        return console.log("Hey from confirm action!");
    };
}

function resendConfirm() {
    return dispatch => {
        return new ResendConfirmation({request:axios})
            .confirm(userData.email);


    };
}