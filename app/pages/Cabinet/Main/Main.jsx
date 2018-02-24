import React from "react";
import {Switch,Route} from "react-router-dom";

import Panel from "app/pages/Cabinet/Panel/Panel";
import History from "app/pages/Cabinet/History/History";
import Settings from "app/pages/Cabinet/Settings/Settings";


import Footer from "app/pages/Cabinet/components/Common/Footer";
import Header from "app/pages/Cabinet/components/Common/Header";
import {NoMatch} from "app/pages";

import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";
//import "app/pages/Cabinet/assets/css/libs.css";

class CabinetMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var mainStyle = {
            backgroundColor: 'white',
        };
        const {match} = this.props;
        return (
            <div class={cabinetStyle["admin-panel"]} style={mainStyle}>
                <Header/>
                <Switch>
                    <Route exact path={match.url+'/'} component={Panel} />
                    <Route path={match.url+'/settings'}  component={Settings} />
                    <Route path={match.url+'/history'} component={History} />
                    <Route component={NoMatch}/>
                </Switch>
                <Footer/>

            </div>
        );
    }

}

export default CabinetMain;
