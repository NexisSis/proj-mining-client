import React from "react";
import {Route, Switch} from "react-router-dom";
import {Landing} from "app/pages/Landing";
import {NoMatch} from "app/pages/NoMatch";
import {Register} from "app/pages/Register";
import {Login} from "app/pages/Login";
import {Header} from "app/pages/Main";
import {Footer} from "app/pages/Main";
import {ContactUs} from "app/pages/ContactUs";
import "./assets/js/main";
import "./assets/css/styles.css";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Main page");
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Landing}/>
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