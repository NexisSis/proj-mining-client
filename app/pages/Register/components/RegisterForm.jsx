import React from "react";
import TextFieldGroup from "app/utils/components/TextFieldGroup";
import PropTypes from "prop-types";
import validateInput from "app/utils/components/ValidationSignUp";
import {Redirect} from "react-router-dom";
import mainStyle from "app/pages/Main/assets/css/main.css";

class RegisterForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email:'asd@mail.ru',
            password:'12345678',
            passwordConfirmation:'12345678',
            country:'Germany',
            errors:{},
            isLoading:false,
            isRedirect:false,
            serverError:""

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    isValid(){
        const {errors,isValid} = validateInput((this.state));
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    returnJson(){
        return {
            "jsonrpc": "2.0",
            "id": 4564,
            "result": []
        };
    }
    onSubmit(e){
        e.preventDefault();
        if(this.isValid()) {
            this.props.signup(this.state)().then(response => {
                if (response.status == 200) {
                    if (response.data.error != undefined) {
                        if (response.data.error.message != undefined) {
                            this.setState({serverError: response.data.error.message});
                            if (response.data.error.validation_errors != undefined) {
                                this.setState({errors: response.data.error.validation_errors});
                            }
                        }
                    }
                    if (response.data.result != undefined) {
                        this.setState({isRedirect: true});
                    } else {
                        this.setState({isRedirect: false});
                    }
                }
            });
        }
    }
    render() {
        if(this.state.isRedirect){
            return <Redirect to='/register-success' />;
        }
        const {errors} = this.state;
        return (
            <div>
                <form class={mainStyle["form"]} onSubmit={this.onSubmit}>

                    <TextFieldGroup field="email" value={this.state.email} label={"Эл. почта"} onChange={this.onChange} type="email" error={errors.email}/>

                    <div class={mainStyle["reg-box"]}>
                        <span class={mainStyle["reg-box__title"]}>Страна</span>
                        <div class={mainStyle["reg-box__value"]}>

                            <div class={mainStyle["select"]}>
                                <select class={mainStyle["selectpicker"]} value={this.state.country} onChange={this.onChange} name="country">
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

                    <TextFieldGroup field="password" value={this.state.password} label={"Пароль"} onChange={this.onChange} type="password" error={errors.password}/>

                    <TextFieldGroup field="passwordConfirmation" value={this.state.passwordConfirmation} label={"Повторить пароль"} onChange={this.onChange} type="password" error={errors.passwordConfirmation}/>

                    <div class={mainStyle["reg-box"]}>

                        <div class={mainStyle["reg-captcha"]}>
                            <span class={mainStyle["reg-captcha__text"]}><b>captcha</b></span>
                        </div>

                    </div>

                    <div class={mainStyle["reg-box"]}>
                        <p>{this.state.serverError}</p>
                        <input class={mainStyle["button"] + ' ' + mainStyle["button--orangeBig"]} type="submit" value="Зарегистрироваться" disabled={this.state.isLoading} />

                    </div>

                </form>
            </div>
        );
    }
}

RegisterForm.propTypes={
    signup:PropTypes.func.isRequired
}

export default RegisterForm;