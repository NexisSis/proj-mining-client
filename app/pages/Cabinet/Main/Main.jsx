import React from "react";

class Main extends React.Component {
    render() {
        return (
            <div class="content">
                <HeaderTitle name={"Личный кабинет"}/>
                <div class="informers-block">
                    <div class="cont">
                        <Notification type={"info"} text={errorText}/>
                        <Notification type={"yellow"} text={errorText}/>
                        <Notification type={"red"} text={errorText}/>
                        <Notification type={"green"} text={errorText}/>
                    </div>
                </div>
                <div class="technical-offers">
                    <div class="cont">
                        <HashRate name={"Scrypt"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"SHA-256"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"Ethereum"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"ZCASH"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"DASH"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
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
        );
    }
}

export {Main};