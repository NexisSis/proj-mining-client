import React from 'react';
import TextFieldGroup from "app/utils/components/TextFieldGroup";
import {authentication} from "app/store/actions/user/authetication";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {test} from "app/store/actions/user/test";
import mainStyle from "app/pages/Main/assets/css/main.css";
import {Redirect} from 'react-router-dom';

class LoginTemp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            errors:{},
            isRemember:false,
            isLoading:false,
            isRedirect:false

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
            this.setState({isRedirect:true});
        }
        // this.props.test({isAuth:true});

    }
    render(){
        const {errors} = this.state;
        var heightDiv = {
            height: '700px'
        };
        if(this.state.isRedirect){
            return <Redirect to='/cabinet' />;
        }
                return(
                    <div>
                        <div class={mainStyle["titleBox"] + ' ' +mainStyle["titleBox--alignment"] + ' ' + mainStyle["titleModal"]}><h4>Вход</h4></div>

                        <form class={mainStyle["form"]} onSubmit={this.onSubmit} style={heightDiv}>

                            <TextFieldGroup field="email" value={this.state.email} label={"Эл. почта"} onChange={this.onChange} type="email" error={errors.email} required='true'/>

                            <TextFieldGroup field="password" value={this.state.password} label={"Пароль"} onChange={this.onChange} type="password" error={errors.password} required='true'/>

                            <div class={mainStyle["reg-box"]}>

                                <input class={mainStyle["button"] + mainStyle["button--orangeBig"]} type="submit" value="Войти" />

                            </div>

                        </form>

                     </div>
                );
    }
}

LoginTemp.propTypes={
    authentication:PropTypes.func.isRequired
}

export default connect(null,{authentication})(LoginTemp);