import React from 'react';
import TextFieldGroup from "app/utils/components/TextFieldGroup";
import {authentication} from "app/store/actions/user/authetication";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {test} from "app/store/actions/user/test";

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
                <div class="modal modalCenter fade" id="login" tabIndex="-1" role="dialog"
                     aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">

                                <div class="titleBox titleBox--alignment titleModal"><h4>Вход</h4></div>

                                <form class="form" onSubmit={this.onSubmit}>

                                    <TextFieldGroup field="email" value={this.state.email} label={"Эл. почта"} onChange={this.onChange} type="email" error={errors.email} required='true'/>

                                    <TextFieldGroup field="password" value={this.state.password} label={"Пароль"} onChange={this.onChange} type="password" error={errors.password} required='true'/>

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

Modal.propTypes={
    authentication:PropTypes.func.isRequired
}

export default connect(null,{authentication})(Modal);