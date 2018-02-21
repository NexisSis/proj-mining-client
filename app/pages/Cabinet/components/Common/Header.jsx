import React from "react";
import {Nav} from "app/pages/Cabinet/components/Header/Nav";
import {User} from "app/pages/Cabinet/components/Header/User";
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <header class="header">
                    <div class="logo-block">
                        <Link class="logo" to="/">C<span>loudMining</span></Link>
                    </div>
                    <User />
                    <div class="mobileMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="header-block">
                        <Nav/>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;