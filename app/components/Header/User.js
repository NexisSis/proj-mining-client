import React from "react"

export default class User extends React.Component {
    render() {
        return (
            <div class="user">
                <div class="user__img"><a href="javascript:void(0)"><img src="../../../public/pictures/user/user.jpg" alt="user" /></a></div>
                <ul class="user__info">
                    <li><a href="javascript:void(0)">cloudminer@mail.com</a></li>
                </ul>
            </div>
        )
    }
}


