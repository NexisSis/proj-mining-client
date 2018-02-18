import React from "react";

class HashRate extends React.Component {
    render() {
        return (
            <a class="technical-offers__box" href={this.props.href}>
                <span class="technical-offers__title"><b>{this.props.name}</b>{this.props.name2}</span>
                <span class="technical-offers__value"><b>{this.props.value}</b>{this.props.value2}</span>
            </a>
        );
    }
}

export {HashRate};