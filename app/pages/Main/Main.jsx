import React from "react";
import Panel from "app/pages/Cabinet";
import History from "app/pages/History";
import Settings from "app/pages/Settings";
import Footer from "app/components/Html/Footer";
import Header from "app/components/Html/Header";
import {Switch, Route} from "react-router-dom";


class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                "Main component"
                {/*<Switch>*/}
                    {/*<Route exact path="/panel" component={Panel}/>*/}
                    {/*<Route path="/history" component={History}/>*/}
                    {/*<Route path="/settings" component={Settings}/>*/}
                {/*</Switch>*/}
                <Footer/>
            </div>

        );
    }
}

export {Main};