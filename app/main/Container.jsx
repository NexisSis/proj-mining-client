import React from "react";
import {IntlProvider} from "react-intl";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {store, history} from "app/store";

import {Main} from "app/pages";
import {ConnectedRouter} from "react-router-redux";

class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <IntlProvider locale="en">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Router>
                            <Route path={"/"} component={Main}/>
                        </Router>
                    </ConnectedRouter>
                </Provider>
            </IntlProvider>
    );
    }

    }

    export {Container};