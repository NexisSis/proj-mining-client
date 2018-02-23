import React from "react";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";
import userPhoto from "app/pages/Cabinet/assets/pictures/user/user.jpg";

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={cabinetStyle["user"]}>
                <div class={cabinetStyle["user__img"]}>
                    <a href="javascript:void(0)">
                        <img class={cabinetStyle["titleBox--main"]} src={userPhoto} alt="user"/>
                    </a>
                </div>
                <ul class={cabinetStyle["user__info"]}>
                    <li>
                        <a href="mailto:javascript:void(0)">
                            cloudminer@mail.com
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default User;


