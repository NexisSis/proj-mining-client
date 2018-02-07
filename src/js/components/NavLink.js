import React from "react"

export default class NavLink extends React.Component {
    render() {
        return (
             <a class={this.props.classNavName} href={this.props.href}><span>{this.props.name}</span></a>
        )
    }
}