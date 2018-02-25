import React from "react";
import {Route, Switch} from "react-router-dom";
import {Landing} from "app/pages/Landing";
import {NoMatch} from "app/pages/NoMatch";
import {Register} from "app/pages/Register";
import {Header} from "app/pages/Main";
import {Footer} from "app/pages/Main";
import {ContactUs} from "app/pages/ContactUs";
import {LoginModal, ResetPasswordModal} from "app/pages/Main/components/";
import RegisterSuccess from "app/pages/RegisterSuccess/RegisterSuccess";
import Forbidden from "app/pages/Forbidden/Forbidden";
import {Confirmation} from "app/pages/Confirmation/";
import {Opportunities} from "app/pages/Opportunities/Opportunities";
import {ResetPasswordConfirmation} from "app/pages/ResetPasswordConfirmation";
import mainStyle from "./assets/css/main.css";
import "./assets/css/libs.css";
import {menu, page, modals} from "./assets/js/main-site";

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        page.init();
        menu.init();
        modals.init();
    }

    render() {
        const hidden = {display: 'none'};
        return (
            <div>
                <div className={mainStyle["total-container"]}>
                    <Header path={this.props.location.pathname}/>
                    <Switch>
                        <Route exact path={"/"} component={Landing}/>
                        <Route path={"/opportunities"} component={Opportunities}/>
                        <Route path={"/register"} component={Register}/>
                        <Route path={"/contact-us"} component={ContactUs}/>
                        <Route path={"/register-success"} component={RegisterSuccess}/>
                        <Route path={"/forbidden"} component={Forbidden}/>
                        <Route path={"/confirmation"} component={Confirmation}/>
                        <Route path={"/password-confirmation"} component={ResetPasswordConfirmation}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
                <Footer/>
                <LoginModal/>
                <ResetPasswordModal/>
                <div className={mainStyle["modal-backdrop"] + " " + mainStyle.fade} style={hidden}/>
            </div>
        );
    }
}

export default Main;
