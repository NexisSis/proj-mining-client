import React from "react";
import {Link} from 'react-router-dom';
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class NavLink extends React.Component {
    render() {
        return (
            <Link to={this.props.href} class={cabinetStyle[this.props.classNavName]}><span>{this.props.name}</span></Link>
        );
    }
}

export default NavLink;