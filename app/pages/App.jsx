import React from "react";
import {Provider} from "react-redux";
import {Router, Route} from "react-router";
import {store,history} from "app/store";

import {Main} from "app/pages";


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Main}/>
                </Router>
            </Provider>
        );
    }
}

export {App};