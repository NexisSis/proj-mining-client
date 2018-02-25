import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
export default function(ComposedComponent) {
    class Authenticate extends React.Component {
        constructor(){
            super();
            this.state={
                isRedirect:false
            };
        }
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.setState({isRedirect:true});
            }
        }
        render() {
            if(this.state.isRedirect){
                return (
                    <Redirect to='/login-bad' />
                );
            }
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    }


    function mapStateToProps(state) {
        console.log(state);
        return {
            isAuthenticated: state.authentication.isAuthentificated
        };
    }

    return  connect(mapStateToProps, {})(Authenticate);
}