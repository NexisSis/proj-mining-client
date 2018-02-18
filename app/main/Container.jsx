import React from "react";
import {IntlProvider} from "react-intl";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {ConnectedRouter} from "react-router-redux";
import {store,history} from "app/store";

import {Main} from "app/pages";

class Container extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <IntlProvider locale="en">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Route path="/" component={Main}/>
                    </ConnectedRouter>
                </Provider>
            </IntlProvider>
        );
    }

}

export {Container};