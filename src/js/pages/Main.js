import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Cabinet from "./Cabinet"

export default class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Header />
                <Cabinet />
                <Footer />
            </div>

        );
    }
}