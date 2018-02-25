import React from 'react';
import TextFieldGroup from "app/utils/components/TextFieldGroup";
import {signin} from "app/store/actions/user/authetication";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import mainStyle from "app/pages/Main/assets/css/main.css";
import {Link} from "react-router-dom";


class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isRemember: false,
            isLoading: false

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.props.signin(this.state)) {
            console.log(this.props.history);
        }
    }

    render() {
        const {errors} = this.state;
        const resetPasswordStyle = {
            marginTop: "3 px"
        };
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

                            <div
                                className={mainStyle["titleBox"] + ' ' + mainStyle["titleBox--alignment"] + ' ' + mainStyle["titleModal"]}>
                                <h4>Вход</h4></div>

                            <form className={mainStyle["form"]} onSubmit={this.onSubmit}>

                                <TextFieldGroup field="email" value={this.state.email} label={"Эл. почта"}
                                                onChange={this.onChange} type="email" error={errors.email}
                                                placeholder="cloudminer@mail.com"
                                                required='true'/>

                                <TextFieldGroup field="password" value={this.state.password} label={"Пароль"}
                                                onChange={this.onChange} type="password" error={errors.password}
                                                required='true'/>

                                <div className={mainStyle["reg-box"] + " " + mainStyle.checkbox}>
                                    <input id="checkbox_01" className={mainStyle["inputCheckbox"]} type="checkbox"/>
                                    <label htmlFor="checkbox_01"
                                           className={mainStyle["reg-box__title_checkbox"]}>Запомнить</label>
                                </div>
                                <Link to="javascript:void(0)"
                                      className={mainStyle["reg-forgot__text"] + " " + mainStyle["pull-right"]}
                                      data-toggle="modal"
                                      data-target="#reset-password">
                                    Забыли пароль
                                </Link>
                                <div className={mainStyle["reg-box"]}>

                                    <div className={mainStyle["reg-captcha"]}>
                                        <span className={mainStyle["reg-captcha__text"]}><b>captcha</b></span>
                                    </div>

                                </div>

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