import React from "react";
import {IntlProvider} from "react-intl";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {BrowserRouter as Router,Switch} from "react-router-dom";
import {store, history} from "app/store";

import CabinetMain from "app/pages/Cabinet/Main/Main";
import Main from "app/pages/Main/Main";
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
                            <Switch>
                                <Route path={"/cabinet"} component={CabinetMain} />
                                <Route exect path={"/"} component={Main} />
                            </Switch>
                        </Router>
                    </ConnectedRouter>
                </Provider>
            </IntlProvider>
        );
    }

    }

export {Container};

