import React from "react";

class HeaderTitle extends React.Component {
    render() {
        return (
            <div class="content-title">
                <div class="cont"><h2>{this.props.name}</h2></div>
            </div>
        );
    }
}

export {HeaderTitle};
