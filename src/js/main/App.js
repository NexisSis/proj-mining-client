import React from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import {Switch,Route} from 'react-router-dom'

export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Main />
                <Footer />
            </div>

        );
    }
}