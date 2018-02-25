import React from 'react';
import {connect} from 'react-redux';
import {confirm} from "app/store/actions/user/register";
import qs from 'qs';

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            message: ""
        };
    }

    componentWillMount() {
        let decodeToken = this.parseToken(this.props.location.search);
        if (typeof (decodeToken) !== undefined) {
            confirm(decodeToken)().then(response => {
                if (typeof (response.data.result) !== undefined) {
                    //this.setState({isError:false});
                }
                else if (typeof (response.data.error.message) !== undefined) {
                    this.setState({message: response.data.error.message});
                } else {
                    this.setState({isError: true});
                }
                console.log(response);
            });
        } else {
            this.setState({isError: true});
        }
    }

    parseToken(decodeToken) {
        //@TODO:FIX A BUG
        decodeToken = decodeURIComponent(decodeURIComponent(this.props.location.search));
        decodeToken = decodeToken.slice(1);
        return qs.parse(decodeToken).token;
    }

    render() {
        let style = {
            marginTop: '36px',
            textAlign: 'center',
            marginBottom: '372px'

        };
        if(this.state.isError) {
            console.log(this.state.message);
        }
        return (
            <h1 style={style}>{this.state.isError ? "Произошла ошибка при подтверждении почты. Попробуйте позже" : 'Поздравляю! Вы успешно зарегестрировались.'}</h1>
        );
    }
}

export default connect(null, {confirm})(Confirmation);