import React from 'react';
import {confirm} from "app/store/actions/user/register";
import qs from 'qs';
import {Redirect} from "react-router-dom";
import ResetPasswordConfirmationForm from "./components/ResetPasswordConfirmationForm";

class ResetPasswordConfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allowed: false
        };
    }

    componentWillMount() {
        let confirmationToken = this.parseToken(this.props.location.search);
        if (typeof (confirmationToken) !== undefined) {
            confirm(confirmationToken)().then(response => {
                if (typeof (response.data.result) !== undefined) {
                    //this.setState({isError:false});
                } else if (typeof (response.data.error.message) !== undefined) {
                    this.setState({message: response.data.error.message});
                } else {
                    this.setState({isError: true});
                }
                console.log(response);
            });
        }
    }

    parseToken(decodeToken) {
        decodeToken = decodeURIComponent(decodeURIComponent(this.props.location.search));
        decodeToken = decodeToken.slice(1);
        return qs.parse(decodeToken).token;
    }

    render() {
        if (!this.state.allowed) {
            return <Redirect to={"/forbidden"}/>;
        }
        return (
            <div>
                <ResetPasswordConfirmationForm />
            </div>
        );
    }
}

export default ResetPasswordConfirmation;