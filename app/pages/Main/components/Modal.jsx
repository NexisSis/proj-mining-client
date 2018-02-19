import React from 'react';

export default class Modal extends React.Component{
    render(){
        return(
                <div class="modal modalCenter fade" id="login" tabIndex="-1" role="dialog"
                     aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">

                                <div class="titleBox titleBox--alignment titleModal"><h4>Вход</h4></div>

                                <form class="form">

                                    <div class="reg-box">
                                        <span class="reg-box__title">Эл. почта</span>
                                        <div class="reg-box__value">
                                            <input class="inputText" type="text" placeholder="cloudminer@mail.com" />
                                        </div>
                                    </div>

                                    <div class="reg-box">
                                        <span class="reg-box__title">Пароль</span>
                                        <div class="reg-box__value has-error">
                                            <input class="inputText inputError" type="password" />
                                            <span class="has-error__text">Введите пароль</span>
                                        </div>
                                    </div>

                                    <div class="reg-box checkbox">
                                        <input id="checkbox_01" class="inputCheckbox" type="checkbox"/>
                                        <label for="checkbox_01" class="reg-box__title_checkbox">Запомнить</label>

                                        <span class="reg-forgot__text pull-right">Забыли пароль?</span>
                                    </div>

                                    <div class="reg-box">

                                        <div class="reg-captcha">
                                            <span class="reg-captcha__text"><b>captcha</b></span>
                                        </div>

                                    </div>

                                    <div class="reg-box">

                                        <input class="button button--orangeBig" type="submit" value="Войти" />

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}