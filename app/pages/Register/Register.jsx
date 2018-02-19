import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="reg">

                    <div class="container-fluid">

                        <div class="reg-cont">

                            <form class="form">

                                <div class="reg-box">
                                    <span class="reg-box__title">Эл. почта</span>
                                    <div class="reg-box__value">
                                        <input class="inputText" type="text"/>
                                    </div>
                                </div>

                                <div class="reg-box">
                                    <span class="reg-box__title">Страна</span>
                                    <div class="reg-box__value">

                                        <div class="select">
                                            <select class="selectpicker">
                                                <option>Китай</option>
                                                <option>Япония</option>
                                                <option>Польша</option>
                                                <option>Германия</option>
                                                <option>Франция</option>
                                                <option>Бразилия</option>
                                                <option>Германия</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                                <div class="reg-box">
                                    <span class="reg-box__title">Пароль</span>
                                    <div class="reg-box__value">
                                        <input class="inputText" type="password"/>
                                    </div>
                                </div>

                                <div class="reg-box">
                                    <span class="reg-box__title">Повторить пароль</span>
                                    <div class="reg-box__value">
                                        <input class="inputText" type="password"/>
                                    </div>
                                </div>

                                <div class="reg-box">

                                    <div class="reg-captcha">
                                        <span class="reg-captcha__text"><b>captcha</b></span>
                                    </div>

                                </div>

                                <div class="reg-box">

                                    <input class="button button--orangeBig" type="submit" value="Зарегистрироваться"/>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>
                <div class="hFooter"></div>
            </div>
        );
    }
}

export {Register};