import React from 'react';
import RegFieldGroup from "app/components/RegFieldGroup";
import {signin,setCurrentUser} from "app/store/actions/user/authetication";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import mainStyle from "app/pages/Main/assets/css/main.css";
import {FormattedMessage} from "react-intl";
import {Redirect} from "react-router-dom";
import setAuthorizationToken from "app/utils/setAuthorizationToken";
import Recaptcha from "app/components/Recaptcha";
class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            rememberMe: false,
            isLoading: false,
            errorMsg:'',
            isRedirect:false,
            isRecaptch:false

        };
        console.log(this.context);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.verifyCallbackRecaptch = this.verifyCallbackRecaptch.bind(this);

    }
    verifyCallbackRecaptch(response) {
        this.setState({isRecaptch: true});
        console.log('hello from recaptch');
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.isRecaptch){
            signin(this.state)().then(response => {
                if (response.data.error != undefined) {
                    if (response.data.error.message != undefined) {
                        this.setState({isRedirect:false,errorMsg:'Ошибка'});
                    }
                } else if (response.data.result != undefined) {
                    if (response.data.result.token != undefined) {
                        localStorage.setItem('token', response.data.result.token);
                        setAuthorizationToken(response.data.result.token);
                        setCurrentUser({isAuth: true});
                        this.setState({isRedirect:true});
                    } else {
                        console.log('no token from server');
                        this.setState({isRedirect:false,errorMsg:'Серверная ошибка'});
                    }
                } else {
                    this.setState({isRedirect:false,errorMsg:'Серверная ошибка'});
                }
            });
        }else{
            this.setState({isRedirect:false,errorMsg:'Заполните все поля корректно!'});
        }


    }

    render() {
        if (this.state.isRedirect) {
            return <Redirect to='/cabinet'/>;
        }
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
                                    <Recaptcha
                                        ref={ ref => this.recaptcha = ref }
                                        sitekey={'6LfCYUgUAAAAAK6pX0xWrAnKi0VJIrxT92b1UqyK'}
                                        onResolved={this.verifyCallbackRecaptch} />
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

export default connect(null, {signin,setCurrentUser})(LoginModal);