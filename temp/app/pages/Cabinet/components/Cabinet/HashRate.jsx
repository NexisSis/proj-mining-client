import React from "react";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class HashRate extends React.Component {
    render() {
        return (
            <a class={cabinetStyle["technical-offers__box"]} href={this.props.href}>
                <span class={cabinetStyle["technical-offers__title"]}><b>{this.props.name}</b>{this.props.name2}</span>
                <span class={cabinetStyle["technical-offers__value"]}><b>{this.props.value}</b>{this.props.value2}</span>
            </a>
        );
    }
}

export default HashRate;