import { createStore, combineReducers, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerReducer,routerMiddleware } from "react-router-redux";
import {browserHistory} from "react-router";
import {createBrowserHistory as createHistory} from 'history';

import {alert as reducers} from "./reducers";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    applyMiddleware(middleware)
);

export {store, history};