import React from "react";
import {connect} from 'react-redux';
import {resetPasswordConfirm} from "app/store/actions/user/reset";

//@TODO:ADD SWITCH TO SHOW HIDDEN PASSWORD
class ResetPasswordConfirmationForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form className={mainStyle.form}>

                    <div className={mainStyle["reg-box"] + ' ' + mainStyle.reset}>
                        <div className="reg-box__value">
                            <input className="inputText"
                                   type="text"
                                   name="password"
                                   onChange={this.onChange}
                                   error={errors.email}
                                   placeholder="cloudminer@mail.com"
                            />
                        </div>
                    </div>

                    <div className={mainStyle["reg-box"] + ' ' + mainStyle.reset}>
                        <span className="reg-box__title">Введите новый пароль</span>
                        <div className="reg-box__value">
                            <input className="inputText"
                                   type="password"
                                   name="password"
                                   onChange={this.onChange}
                                   error={errors.email}
                                   placeholder="cloudminer@mail.com"
                            />
                        </div>
                    </div>

                    <div className={mainStyle["reg-box"] + ' ' + mainStyle.reset}>
                        <span className="reg-box__title">Повторите пароль</span>
                        <div className="reg-box__value">
                            <input className="inputText"
                                   type="password"
                                   name="password_confirmation"
                                   onChange={this.onChange}
                                   error={errors.email}
                            />
                        </div>
                    </div>

                    <div className={mainStyle["reg-box"]}>

                        <input className={mainStyle.button + ' ' + mainStyle["button--orangeBig"]} type="submit" value="Подтвердить"/>

                    </div>

                </form>
            </div>
        );
    }
}

export default connect(null,{resetPasswordConfirm})(ResetPasswordConfirmationForm);