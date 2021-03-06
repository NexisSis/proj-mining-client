import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const renderers = [];

const injectScript = locale => {
    window.GoogleRecaptchaLoaded = () => {
        while ( renderers.length ) {
            const renderer = renderers.pop();
            renderer();
        }
    };

    const script = document.createElement( 'script' );
    script.id = 'recaptcha';
    script.src = `https://www.google.com/recaptcha/api.js?hl=${locale}&onload=GoogleRecaptchaLoaded&render=explicit`;
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.onerror = function( error ) { throw error; };
    document.body.appendChild( script );
};

class Recaptcha extends React.Component {
    componentDidMount() {
        const { sitekey, locale, badge, onResolved, onLoaded } = this.props;

        this.callbackName = 'GoogleRecaptchaResolved-' + uuid();
        window[ this.callbackName ] = onResolved;

        const loaded = () => {
            if ( this.container ) {
                const recaptchaId = window.grecaptcha.render( this.container, {
                    sitekey,
                    size: 'normal',
                    badge,
                    callback: this.callbackName
                });
                this.execute = () => window.grecaptcha.execute( recaptchaId );
                this.reset = () => window.grecaptcha.reset( recaptchaId );
                this.getResponse = () => window.grecaptcha.getResponse( recaptchaId );
                onLoaded();
            }
        };

        if ( window.grecaptcha ) {
            loaded();
        } else {
            renderers.push( loaded );
            if ( !document.querySelector( '#recaptcha' ) ) {
                injectScript( locale );
            }
        }
    }
    componentWillUnmount() {
        delete window[ this.callbackName ];
        delete this.container;
    }
    render() {
        const { style } = this.props;
        return (
            <div ref={ ref => this.container = ref } style={ style } />
        );
    }
}

Recaptcha.propTypes = {
    sitekey: PropTypes.string.isRequired,
    locale: PropTypes.string,
    badge: PropTypes.oneOf( [ 'bottomright', 'bottomleft', 'inline' ] ),
    onResolved: PropTypes.func.isRequired,
    onLoaded: PropTypes.func,
    style: PropTypes.object
};

Recaptcha.defaultProps = {
    locale: 'en',
    badge: 'bottomright',
    onLoaded: () => {}
};

export default Recaptcha;