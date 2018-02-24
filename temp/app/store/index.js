import { createStore, applyMiddleware,compose } from "redux";
import { syncHistoryWithStore, routerReducer,routerMiddleware } from "react-router-redux";
import {browserHistory} from "react-router";
import {createBrowserHistory as createHistory} from 'history';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


const history = createHistory();
const middleware = routerMiddleware(history);
/*const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    applyMiddleware(middleware)
);
*/

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk,middleware),window.devToolsExtension? window.devToolsExtension() : f => f )

);
export {store, history};