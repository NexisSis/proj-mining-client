import {AlertConstants } from "app/store/constants/index";

export function alert(state = {}, action) {
    switch(action.type) {
        case AlertConstants.SUCCESS:
            return {
                type: AlertConstants.SUCCESS.toLowerCase(),
                message: action.message
            };
        case AlertConstants.INFO:
            return {
                type: AlertConstants.INFO.toLowerCase(),
                message: action.message
            };

        case AlertConstants.WARNING:
            return {
                type: AlertConstants.WARNING.toLowerCase(),
                message: action.message
            };

        case AlertConstants.ERROR:
            return {
                type: AlertConstants.ERROR.toLowerCase(),
                message: action.message
            };
        case AlertConstants.CLEAR:
            return {
                type: AlertConstants.CLEAR.toLowerCase(),
                message: action.message
            };
        default:
            return state;
    }
}