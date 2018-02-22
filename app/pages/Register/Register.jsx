import React from "react";
import RegisterForm from "./components/RegisterForm";
import {connect} from 'react-redux';
import {signup} from "app/store/actions/user/register";
import PropTypes from 'prop-types';


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
                <div class="reg">

                    <div class="container-fluid">

                        <div class="reg-cont">
                            <RegisterForm signup={signup}/>
                        </div>

                    </div>

                </div>
                <div class="hFooter"></div>
            </div>
        );
    }
}
Register.propTypes ={
    signup:PropTypes.func.isRequired
}
export default connect(null,{signup})(Register);