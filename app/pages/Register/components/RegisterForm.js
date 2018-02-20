import React from "react";
import TextFieldGroup from "app/utils/components/TextFieldGroup";
import PropTypes from "prop-types";
import validateInput from "app/utils/components/ValidationSignUp";


class RegisterForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            passwordConfirmation:'',
            country:'',
            errors:{},
            isLoading:false,

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
    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.props.signup(this.state)();
        }
    }
    render() {
        const {errors} = this.state;
        return (
            <div>
                <form class="form" onSubmit={this.onSubmit}>

                    <TextFieldGroup field="email" value={this.state.email} label={"Эл. почта"} onChange={this.onChange} type="email" error={errors.email}/>


                    <div class="reg-box">
                        <span class="reg-box__title">Страна</span>
                        <div class="reg-box__value">

                            <div class="select">
                                <select class="selectpicker" value={this.state.country} onChange={this.onChange} field={"country"}>
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

                    <div class="reg-box">

                        <div class="reg-captcha">
                            <span class="reg-captcha__text"><b>captcha</b></span>
                        </div>

                    </div>

                    <div class="reg-box">

                        <input class="button button--orangeBig" type="submit" value="Зарегистрироваться" disabled={this.state.isLoading} />

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