import React from 'react';
import {resetPassword} from "app/store/actions/user/reset";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import mainStyle from "app/pages/Main/assets/css/main.css";


class ResetPasswordModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {},
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
        if (this.props.resetPassword(this.state)) {
            console.log(this.props.history);
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className={mainStyle.modal + ' ' + mainStyle.modalCenter + ' ' + mainStyle.fade}
                 id="reset-password"
                 tabIndex="-1" role="dialog"
                 aria-labelledby="ModalLabel"
                 aria-hidden="true">
                <div className={mainStyle["modal-dialog"]}>
                    <div className={mainStyle["modal-content"]}>
                        <div className={mainStyle["modal-body"]}>

                            <div
                                className={mainStyle.titleBox + ' ' + mainStyle["titleBox--alignment"] + ' ' + mainStyle.titleModal}>
                                <h4>Сброс Пароля</h4></div>

                            <form className={mainStyle.form}>

                                <div className={mainStyle["reg-box"] + ' ' + mainStyle.reset}>
                                    <span className={mainStyle["reg-box__title"]}>
                                        Введите адрес Вашей электронной почты,<br/> чтобы сбросить пароль</span>
                                    <div className={mainStyle["reg-box__value"]}>
                                        <input className={mainStyle["inputText"]}
                                               type="inputText"
                                               onChange={this.onChange}
                                               error={errors.email}
                                               placeholder="cloudminer@mail.com"
                                        />
                                    </div>
                                </div>

                                <div className={mainStyle["reg-box"]}>

                                    <input className={mainStyle.button + ' ' + mainStyle["button--orangeBig"]} type="submit" value="Отправить"/>

                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

ResetPasswordModal.propTypes = {
    resetPassword: PropTypes.func.isRequired
};

export default connect(null, {resetPassword})(ResetPasswordModal);