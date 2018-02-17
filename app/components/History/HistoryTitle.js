import React from "react"

export default class HistoryTitle extends React.Component {
    render() {
        return (
                <div class="history-box__title"><span>{this.props.name}</span></div>
        )
    }
}


