import {SET_CURRENT_USER} from "../../constants/user";
import isEmpty from "lodash/isEmpty";

const initialState = {
    isAuthentificated:false
};


export default (state = initialState, action={})=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthentificated: action.isAuth,
            }
        default:return state;
    }
}