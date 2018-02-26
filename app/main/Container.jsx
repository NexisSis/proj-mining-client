import React from "react";
import {IntlProvider} from "react-intl";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {BrowserRouter as Router,Switch,Redirect} from "react-router-dom";
import {store, history} from "app/store";
import CabinetMain from "app/pages/Cabinet/Main/Main";
import Main from "app/pages/Main/Main";
import {ConnectedRouter} from "react-router-redux";
import RequireAuth from "app/components/RequireAuth";
import setAuthorizationToken from "app/utils/setAuthorizationToken";
import {setCurrentUser} from "app/store/actions/user/authetication";
class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if(localStorage.token){
            setAuthorizationToken(localStorage.token);
            store.dispatch(setCurrentUser(true));
        }

        return (
            <IntlProvider locale="en">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Router>
                            <Switch>
                                <Route path={"/cabinet"} component={RequireAuth(CabinetMain)} />
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

