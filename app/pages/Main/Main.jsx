import React from "react";
import {Switch, Route} from "react-router-dom";
import {Landing} from "app/pages";
import {NoMatch} from "app/pages";
import {Register} from "app/pages";
import {Login} from "app/pages";
import {Header} from "app/pages/Main";
import {Footer} from "app/pages/Main";
import {ContactUs} from "app/pages";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/register"} component={Register}/>
                    <Route path={"/contact-us"} component={ContactUs}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export {Main};