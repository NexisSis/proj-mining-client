import {RegisterConstants} from "app/store/constants";
import axios from 'axios';


export const actions = {
    signup,
    confirm,
    resendConfirm
};

export function signup(userData){
    return dispatch => {
        //return axios.post('maxPriver.daylink/pls',userData);
        return console.log(userData);
    };
}

function confirm() {

}

function resendConfirm() {

}