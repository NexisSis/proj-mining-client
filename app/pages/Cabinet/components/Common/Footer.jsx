import React from "react";
import Copyright from "app/pages/Cabinet/components/Footer/Copyright";
import ServerTime from "app/pages/Cabinet/components/Footer/ServerTime";
import LastUpdate from "app/pages/Cabinet/components/Footer/LastUpdate";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class Footer extends React.Component {
    render() {
        return (
            <footer class={cabinetStyle["footer"]}>
                <div class={cabinetStyle["cont"]}>
                    <ul class={cabinetStyle["footer-info"]}>
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