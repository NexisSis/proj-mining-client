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

    componentDidMount() {
        $('.selectpicker').selectpicker();
    }


    render() {
        return (
            <div>
                <div className={mainStyle.reg}>

                    <div className={mainStyle["container-fluid"]}>
                        <div className={mainStyle["reg-cont"]}>
                            <RegisterForm signup={signup}/>
                        </div>
                    </div>
                </div>
                <div className={mainStyle.hFooter}/>
            </div>
        );
    }
}

Register.propTypes = {
    signup: PropTypes.func.isRequired
};


export default connect(null, {signup})(Register);