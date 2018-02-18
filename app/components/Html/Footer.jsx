import React from "react";
import Copyright from "app/components/Footer/Copyright";
import ServerTime from "app/components/Footer/ServerTime";
import LastUpdate from "app/components/Footer/LastUpdate";

class Footer extends React.Component {
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
        );
    }
}

export {Footer};