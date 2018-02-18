import React from "react";
import {Main} from "app/pages/Cabinet";
import {History} from "app/pages/Cabinet";
import {Settings} from "app/pages/Cabinet";
import {Footer} from "app/components/Html/Footer";
import {Header} from "app/components/Html/Header";

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
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export {Panel};