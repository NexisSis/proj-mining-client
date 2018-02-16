import React from "react"
import Copyright from "./Footer/Copyright";
import ServerTime from "./Footer/ServerTime";
import LastUpdate from "./Footer/LastUpdate";

export default class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div class="cont">
                    <ul class="footer-info">
                        <Copyright/>
                        <ServerTime/>
                        <LastUpdate/>
                    </ul>
                </div>
            </footer>
        )
    }
}