import {combineReducers} from 'redux';
import authentification from './user/authentication';
import register from './user/register';
import alert from './alert';

export default combineReducers({
    authentification,
    register,
    alert
});