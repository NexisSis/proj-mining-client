import React from 'react';
import TextFieldGroup from "app/utils/components/TextFieldGroup";
import {authentication} from "app/store/actions/user/authetication";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {test} from "app/store/actions/user/test";
import mainStyle from "app/pages/Main/assets/css/main.css";

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            errors:{},
            isRemember:false,
            isLoading:false

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        if(this.props.authentication(this.state)){
            console.log(this.props.history);
        }
       // this.props.test({isAuth:true});
    }
    render(){
        const {errors} = this.state;
        return(
                <div class={mainStyle["modal"] + ' ' + mainStyle["modalCenter"] + ' ' + mainStyle["fade"]} id="login" tabIndex="-1" role="dialog"
                     aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class={mainStyle["modal-dialog"]}>
                        <div class={mainStyle["modal-content"]}>
                            <div class={mainStyle["modal-body"]}>

                                <div class={mainStyle["titleBox"] + ' ' +mainStyle["titleBox--alignment"] + ' ' + mainStyle["titleModal"]}><h4>Вход</h4></div>

                                <form class={mainStyle["form"]} onSubmit={this.onSubmit}>

                                    <TextFieldGroup field="email" value={this.state.email} label={"Эл. почта"} onChange={this.onChange} type="email" error={errors.email} required='true'/>

                                    <TextFieldGroup field="password" value={this.state.password} label={"Пароль"} onChange={this.onChange} type="password" error={errors.password} required='true'/>

                                    <div class={mainStyle["reg-box checkbox"]}>
                                        <input id="checkbox_01" class={mainStyle["inputCheckbox"]} type="checkbox"/>
                                        <label for="checkbox_01" class={mainStyle["reg-box__title_checkbox"]}>Запомнить</label>

                                        <span class={mainStyle["reg-forgot__text pull-right"]}>Забыли пароль?</span>
                                    </div>

                                    <div class={mainStyle["reg-box"]}>

                                        <div class={mainStyle["reg-captcha"]}>
                                            <span class={mainStyle["reg-captcha__text"]}><b>captcha</b></span>
                                        </div>

                                    </div>

                                    <div class={mainStyle["reg-box"]}>

                                        <input class={mainStyle["button"] + mainStyle["button--orangeBig"]} type="submit" value="Войти" />

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

Modal.propTypes={
    authentication:PropTypes.func.isRequired
}

export default connect(null,{authentication})(Modal);