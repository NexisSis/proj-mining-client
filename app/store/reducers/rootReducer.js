import {combineReducers} from 'redux';
import {auth} from './user/authentication';
import {registration} from './user/register';
import {alert} from './alert';

export default combineReducers({
    auth,
    registration,
    alert
});