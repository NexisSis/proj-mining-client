import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
export default function(ComposedComponent,history) {
    class Authenticate extends React.Component {

        componentWillMount() {
            if (!this.props.isAuthenticated) {
              //  history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            console.log('transfer to main page');
           // history.push('/');
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    }


    function mapStateToProps(state) {
        return {
            isAuthenticated: state.authentication.isAuth
        };
    }

    return  withRouter(connect(mapStateToProps, {})(Authenticate));
}