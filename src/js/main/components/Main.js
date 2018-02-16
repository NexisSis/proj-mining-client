import React from "react"
import {Switch,Route} from 'react-router-dom'
import Index from "../pages/Index"
import ContactUs from "../pages/ContactUs"
import Registration from "../pages/Registration"
export default class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/contact' component={ContactUs}/>
                    <Route exact path='/registration' component={Registration}/>
                </Switch>
            </div>

        );
    }
}