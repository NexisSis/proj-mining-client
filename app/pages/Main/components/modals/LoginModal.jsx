import React from 'react';
import RegFieldGroup from "app/components/RegFieldGroup";
import {signin} from "app/store/actions/user/authetication";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import mainStyle from "app/pages/Main/assets/css/main.css";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";


class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            rememberMe: false,
            isLoading: false,
            errorMsg:''

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.props.signin(this.state)) {
            this.setState({errorMsg:'Неправильный логин или пароль'});
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className={mainStyle.modal + ' ' + mainStyle.modalCenter + ' ' + mainStyle.fade}
                 id="login"
                 tabIndex="-1"
                 role="dialog"
                 aria-labelledby="ModalLabel" aria-hidden="true"
                 onChange={this.onChange}

            >
                <div className={mainStyle["modal-dialog"]}>
                    <div className={mainStyle["modal-content"]}>
                        <div className={mainStyle["modal-body"]}>

                            <div className={mainStyle["titleBox"] + ' ' + mainStyle["titleBox--alignment"] + ' ' + mainStyle["titleModal"]}>
                                <h4>Вход</h4></div>

                            <form className={mainStyle["form"]} onSubmit={this.onSubmit}>

                                <RegFieldGroup field="email" value={this.state.email} label={"Эл. почта"}
                                               onChange={this.onChange} type="email" error={errors.email}
                                               placeholder="cloudminer@mail.com"
                                               required='true'/>

                                <RegFieldGroup field="password"
                                               value={this.state.password}
                                               label={"Пароль"}
                                               onChange={this.onChange} type="password" error={errors.password}
                                               required='true'/>

                                <div className={mainStyle["reg-box"] + " " + mainStyle.checkbox}>
                                    <input id={mainStyle["checkbox_01"]}
                                           className={mainStyle["inputCheckbox"]}
                                           type="checkbox"
                                           name={"rememberMe"}
                                           onChange={this.onChange}
                                           checked={false}/>
                                    <label htmlFor="checkbox_01"
                                           className={mainStyle["reg-box__title_checkbox"]}>Запомнить</label>
                                    <a href="javascript:void(0)"
                                          className={mainStyle["reg-forgot__text"] + " " + mainStyle["pull-right"]}
                                          data-toggle="modal"
                                          data-target="#reset-password">
                                        <FormattedMessage
                                            id="main.forgetPassword"
                                            defaultMessage="Забыли пароль ?"/>
                                    </a>
                                </div>

                                <div className={mainStyle["reg-box"]}>

                                    <div className={mainStyle["reg-captcha"]}>
                                        <span className={mainStyle["reg-captcha__text"]}><b>captcha</b></span>
                                    </div>
                                </div>

                                {this.state.errorMsg}
                                <div className={mainStyle["reg-box"]}>

                                    <input className={mainStyle["button"] + ' ' + mainStyle["button--orangeBig"]}
                                           type="submit"
                                           value="Войти"/>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginModal.propTypes = {
    signin: PropTypes.func.isRequired
};

export default connect(null, {signin})(LoginModal);