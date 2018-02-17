import React from "react";
import App from "app/pages";
import IntlProvider from "react-intl";

class Container extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <IntlProvider lang="en">
                <App/>
            </IntlProvider>
        );
    }

}

export {Container};