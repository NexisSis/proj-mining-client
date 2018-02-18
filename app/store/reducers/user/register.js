import {RegisterConstants} from "app/store/constants";

export function registration(state = {},action) {
    switch (action.type) {
        case RegisterConstants.REGISTER_REQUEST:
            return {
                type: "registering",
                message: true
            };
        case RegisterConstants.REGISTER_SUCCESS_REQUEST:
            return {
                type: "registered",
                message: true
            };
        case RegisterConstants.REGISTER_FAILURE_REQUEST:
            return {
                type: "registered",
                message: false
            };
        default:
            return state;
    }
}