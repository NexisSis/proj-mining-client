import {combineReducers} from 'redux';
import authentication from './user/authentication';
import {alert} from './alert';
import test from './user/test';

export default combineReducers({
    authentication,
    test,
    alert
});