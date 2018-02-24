import React from "react";
import Notification from "app/pages/Cabinet/components/Cabinet/Notification";
import HashRate from "app/pages/Cabinet/components/Cabinet/HashRate";
import HashGraph from "app/pages/Cabinet/components/Cabinet/HashGraph";
import HeaderTitle from "app/pages/Cabinet/components/Common/HeaderTitle";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";
class Panel extends React.Component {
    render() {
        return (
            <div class={cabinetStyle["content"]}>
                <HeaderTitle name={"Личный кабинет"}/>

                <div class={cabinetStyle["informers-block"]}>
                    <div class={cabinetStyle["cont"]}>
                        <Notification type={"info"} text={"Info text"}/>
                        <Notification type={"yellow"} text={"Warning text"}/>
                        <Notification type={"red"} text={"error text"}/>
                        <Notification type={"green"} text={"Success text"}/>
                    </div>
                </div>
                <div class={cabinetStyle["technical-offers"]}>
                    <div class={cabinetStyle["cont"]}>
                        <HashRate name={"Scrypt"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"SHA-256"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"Ethereum"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"ZCASH"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                        <HashRate name={"DASH"} name2='хэшрейт' value={"1.0153"} value2={"TH/s"} href={"#"}/>
                    </div>
                </div>
                <div class={cabinetStyle["graphics"]}>
                    <div class={cabinetStyle["cont"]}>
                        <HashGraph name={'ETHASH'}/>
                        <HashGraph name={'SCRYPT'}/>
                        <HashGraph name={'SH-256'}/>
                        <HashGraph name={'SH-256'}/>
                    </div>
                </div>
                    <div className={cabinetStyle["hFooter"]}></div>
            </div>
        );
    }
}

export default Panel;