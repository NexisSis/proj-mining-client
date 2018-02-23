import React from "react";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class HeaderTitle extends React.Component {
    render() {
        return (
            <div class={cabinetStyle["content-title"]}>
                <div class={cabinetStyle["cont"]}><h2>{this.props.name}</h2></div>
            </div>
        );
    }
}

export default HeaderTitle;
