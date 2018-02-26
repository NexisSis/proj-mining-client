import React from "react";
import RegisterForm from "./components/RegisterForm";
import {connect} from 'react-redux';
import {signup} from "app/store/actions/user/register";
import PropTypes from 'prop-types';
import mainStyle from "app/pages/Main/assets/css/main.css";
import {Country} from "app/services/";
import axios from "axios";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    componentDidMount() {
        new Country({request: axios}).list()
            .then(response => {
                if (response.data.result) {
                    this.setState({countries: response.data.result});
                } else if (response.data.error) {
                    throw response.data.error;
                } else {
                    console.log("Undefined response comes from data.countries: " + response.data);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {

        return (
            <div>
                <div className={mainStyle.reg}>

                    <div className={mainStyle["container-fluid"]}>
                        <div className={mainStyle["reg-cont"]}>
                            <RegisterForm signup={signup} countries={this.state.countries}/>
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