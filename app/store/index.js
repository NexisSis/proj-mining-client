import { createStore, combineReducers } from "redux";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import {browserHistory} from "react-router";

import * as reducers from "./reducers";

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory,store);

export {store,history};