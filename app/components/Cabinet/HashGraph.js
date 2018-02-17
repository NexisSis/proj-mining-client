import React from "react"
import HashGraphNav from "./HashGraphNav"
import HashGraphBalance from "./HashGraphBalance"
import HashGraphReturnGraph from "./HashGraphReturnGraph"
import HashGraphReturn from "./HashGraphReturn"
export default class HashGraph extends React.Component{
    render(){
        return(
            <div class="graphics-cont">

                <div class="graphics-nav">
                    <span class="graphics-title"><b></b>{this.props.name}</span>
                    <HashGraphNav />
                </div>
                <div class="graphics-box">
                    <HashGraphBalance />
                </div>

                <div class="graphics-cont__left">
                    <div class="graphics-box">
                        <HashGraphReturnGraph />
                    </div>
                </div>

                <div class="graphics-cont__right">

                    <div class="graphics-box">
                        <HashGraphReturn />
                    </div>

                </div>

            </div>
        )
    }
}