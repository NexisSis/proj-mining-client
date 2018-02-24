import React from "react";
import Nav from "app/pages/Cabinet/components/Header/Nav";
import User from "app/pages/Cabinet/components/Header/User";
import {Link} from "react-router-dom";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <header class={cabinetStyle["header"]}>
                    <div class={cabinetStyle["logo-block"]}>
                        <Link class={cabinetStyle["logo"]} to="/">C<span>loudMining</span></Link>
                    </div>
                    <User />
                    <div class={cabinetStyle["mobileMenu"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class={cabinetStyle["header-block"]}>
                        <Nav/>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;