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
                        <Notification type={"info"} text={"<p>Уважаемые пользователи, Метод оплаты банковским переоводом временно доступен только при заказе свыше 500 USD. Все инвойсы в нашей системе генерируются в USD, однако, в данный момент мы принимаем банковские переводы только в EUR по обменному курсу здесь: <a href=\"javascript:void(0)\">http://www.eestipank.ee/en/exchange-rates</a></p>\n" +
                        "                            <p>Все заказы, оплаченные до этого момента в USD, будут активированы при поступлении платежа на наш банковский счет.</p>"}/>
                        <Notification type={"yellow"} text={'<p>Внимание! У Вас нет купленного хэшрейта, необходимо купить хэшрейт <a href="javascript:void(0)">SHA-256</a> или <a href="javascript:void(0)">Scrypt</a> хэшрейт</p>'}/>
                        <Notification type={"red"} text={"<p>Чтобы успешно вывести средства, пожалуйста, добавьте адрес кошелька BTC в <a href=\"javascript:void(0)\">своем профиле</a></p>"}/>
                        <Notification type={"green"} text={"<p>Чтобы успешно вывести средства, пожалуйста, добавьте адрес кошелька BTC в <a href=\"javascript:void(0)\">своем профиле</a></p>"}/>
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