import React from "react"
import Nav from "./Header/Nav"
import User from "./Header/User"
export default class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <header class="header">
                <div class="logo-block">
                    <a class="logo" href="javascript:void(0)">C<span>loudMining</span></a>
                </div>
                <User/>
                <div class="mobileMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="header-block">
                   <Nav />
                </div>
            </header>
        )
    }
}