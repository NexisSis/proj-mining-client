import {combineReducers} from 'redux';
import authentication from './user/authentication';
import {alert} from './alert';
export default combineReducers({
    authentication,
    alert
});