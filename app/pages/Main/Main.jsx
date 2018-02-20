import React from "react";
import {Route, Switch} from "react-router-dom";
import {Landing} from "app/pages/Landing";
import {NoMatch} from "app/pages/NoMatch";
import Register from "app/pages/Register/Register";
import {Header} from "app/pages/Main";
import {Footer} from "app/pages/Main";
import {ContactUs} from "app/pages/ContactUs";
import "./assets/js/main";
import "./assets/css/styles.css";
import Modal from 'app/pages/Main/components/Modal';
class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header path={this.props.location.pathname}/>
                <Switch>
                    <Route exact path={"/"} component={Landing}/>
                    <Route path={"/register"} component={Register}/>
                    <Route path={"/contact-us"} component={ContactUs}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Modal/>
                <Footer/>
            </div>
        );
    }
}

export {Main};