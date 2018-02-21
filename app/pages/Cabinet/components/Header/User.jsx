import React from "react";

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user">
                <div className="user__img">
                    <a href="javascript:void(0)">
                        <img className="titleBox--main" alt="user"/>
                    </a>
                </div>
                <ul className="user__info">
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

export {User};


