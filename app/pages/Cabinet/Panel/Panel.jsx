import React from "react";
import {Switch,Route} from "react-router-dom";
import {Main} from "app/pages/Cabinet";
import {History} from "app/pages/Cabinet";
import {Settings} from "app/pages/Cabinet";
import {Footer} from "app/components/Html/Footer";
import {Header} from "app/components/Html/Header";
import {NoMatch} from "app/pages";

//@TODO:CREATE ROUTING INSIDE CABINET
class Panel extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path={"/"} component={Main}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/history"} component={History}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export {Panel};