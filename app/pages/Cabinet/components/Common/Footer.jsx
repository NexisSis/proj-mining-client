import React from "react";
import Copyright from "app/pages/Cabinet/components/Footer/Copyright";
import ServerTime from "app/pages/Cabinet/components/Footer/ServerTime";
import LastUpdate from "app/pages/Cabinet/components/Footer/LastUpdate";

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

export default Footer;