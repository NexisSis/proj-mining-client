import React from "react"
import HeaderTitle from "app/components/Html/HeaderTitle"
import Notification from "app/components/Cabinet/Notification"
import HashRate from "app/components/Cabinet/HashRate"
import HashGraph from "app/components/Cabinet/HashGraph"
export default class Cabinet extends React.Component{
    render(){
        const errorText = "<p>Внимание! У Вас нет купленного хэшрейта, необходимо купить хэшрейт <a href=\"javascript:void(0)\">SHA-256</a> или <a href=\"javascript:void(0)\">Scrypt</a> хэшрейт</p>"
        return(
            <div class="content">
                <HeaderTitle name={"Личный кабинет"}/>
                <div class="informers-block">
                    <div class="cont">
                        <Notification type={"info"} text={errorText}/>
                        <Notification type={"yellow"} text={errorText} />
                        <Notification type={"red"} text={errorText}/>
                        <Notification type={"green"} text={errorText}/>
                    </div>
                </div>
                <div class="technical-offers">
                    <div class="cont">
                        <HashRate name={"Scrypt"} name2 ='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"SHA-256"} name2 ='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"Ethereum"} name2 ='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"ZCASH"} name2 ='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"DASH"} name2 ='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                    </div>
                </div>



                <div class="graphics">
                    <div class="cont">
                        <HashGraph name={'ETHASH'}/>
                        <HashGraph name={'SCRYPT'}/>
                        <HashGraph name={'SH-256'}/>
                        <HashGraph name={'SH-256'}/>
                    </div>
                </div>
                <div className="hFooter"></div>
            </div>



    )
    }
}