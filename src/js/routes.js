import React from "react"
import Footer from "./cabinet/components/Footer"
import Header from "./cabinet/components/Header"
import Cabinet from "./cabinet/pages/Cabinet"
import History from "./cabinet/pages/History"
import Settings from "./cabinet/pages/Settings"
import {Switch,Route} from 'react-router-dom'

export default class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/cabinet' component={Cabinet}/>
                    <Route exact path='/history' component={History}/>
                    <Route exact path='/settings' component={Settings}/>
                </Switch>
            </div>

        );
    }
}