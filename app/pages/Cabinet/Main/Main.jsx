import React from "react";
import {Switch,Route} from "react-router-dom";

import Panel from "app/pages/Cabinet/Panel/Panel";
import History from "app/pages/Cabinet/History/History";
import Settings from "app/pages/Cabinet/Settings/Settings";


import Footer from "app/pages/Cabinet/components/Common/Footer";
import Header from "app/pages/Cabinet/components/Common/Header";
import {NoMatch} from "app/pages";

//import "app/pages/Cabinet/assets/css/cabinet.css";
//import "app/pages/Cabinet/assets/css/libs.css";

class CabinetMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;

/*
                <Header/>
                <Switch>
                    <Route exact path={'/cabinet'} component={Panel}/>
                    <Route path={'/cabinet/settings'} component={Settings}/>
                    <Route path={'/cabinet/history'} component={History}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Footer/>
*/
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={match.url+'/'}  render={() => <h3>Main.</h3>}/>
                    <Route path={match.url+'/settings'}  render={() => <h3>Settings.</h3>}/>
                    <Route path={match.url+'/history'} render={() => <h3>History.</h3>}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Footer/>

            </div>
        );
    }

}

export default CabinetMain;
