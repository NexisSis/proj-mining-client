import React from "react"
import { Link } from 'react-router-dom'
export default class NavLink extends React.Component {
    render() {
        return (
             <Link to={this.props.href} class={this.props.classNavName}><span>{this.props.name}</span></Link>
        )
    }
}