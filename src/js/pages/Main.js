import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Cabinet from "./Cabinet"
import History from "./History"
import {Switch,Route} from 'react-router-dom'

export default class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Cabinet}/>
                    <Route path='/history' component={History}/>
                </Switch>
            </div>

        );
    }
}