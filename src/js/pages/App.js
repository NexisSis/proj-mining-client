import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {Switch,Route} from 'react-router-dom'
import Main from "./Main";

export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>

        );
    }
}