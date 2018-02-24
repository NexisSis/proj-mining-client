import React from "react";
import RegisterForm from "./components/RegisterForm";
import {connect} from 'react-redux';
import {signup} from "app/store/actions/user/register";
import PropTypes from 'prop-types';
import mainStyle from "app/pages/Main/assets/css/main.css";

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $('.selectpicker').selectpicker();
    }



    render() {
        return (
            <div>
                <div class={mainStyle["reg"]}>

                    <div class={mainStyle["container-fluid"]}>
                        <div class={mainStyle["reg-cont"]}>
                            <RegisterForm signup={signup}/>
                        </div>
                    </div>
                </div>
                <div class={mainStyle["hFooter"]}></div>
            </div>
        );
    }
}
Register.propTypes ={
    signup:PropTypes.func.isRequired
}


export default connect(null,{signup})(Register);