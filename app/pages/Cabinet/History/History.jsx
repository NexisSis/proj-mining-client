import React from "react";
import HeaderTitle from "app/pages/Cabinet/components/Common/HeaderTitle";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class History extends React.Component {
    render() {
        return (
            <div class={cabinetStyle["content"]}>

                <HeaderTitle name={"История"}/>

                <div class={cabinetStyle["history"]}>

                    <div class={cabinetStyle["cont"]}>
                        <div class={cabinetStyle["history-box"]}>
                            <div class={cabinetStyle["history-box__title"]}><span>Выводы</span></div>
                            <div class={cabinetStyle["history-box__cont"] + ' ' + cabinetStyle["scrollbar-tab"]}>
                                <table class={cabinetStyle["history-tab"]}>
                                    <thead>
                                    <tr>
                                        <td><span>ID</span></td>
                                        <td><span>Время</span></td>
                                        <td><span>Сумма</span></td>
                                        <td><span>Статус</span></td>
                                        <td><span>TxID</span></td>
                                        <td><span>TxID (Alt)</span></td>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span class={cabinetStyle["color-red"]}>Истек</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span class={cabinetStyle["color-green"]}>Обработан</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span class={cabinetStyle["color-red"]}>Истек</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span class={cabinetStyle["color-green"]}>Обработан</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    </tbody>

                                </table>

                            </div>

                            <div class={cabinetStyle["history-elements"]}>

                                <div class={cabinetStyle["history-elements__box"] + ' ' + cabinetStyle["history-elements__box--input"]}>

                                    <input class={cabinetStyle["inputText"] + ' ' + cabinetStyle["inputText--searchMin"]} type="text" placeholder="Поиск"/>

                                </div>

                                <div class={cabinetStyle["history-elements__box"] + cabinetStyle["history-elements__box--select"]}>

                                    <span class={cabinetStyle["history-elements__box-title"]}>Отображать</span>

                                    <div class={cabinetStyle["select"]}>
                                        <select class="selectpicker">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                    </div>

                                </div>

                                <div class={cabinetStyle["history-elements__box"] + ' ' + cabinetStyle["history-elements__box--button"]}>

                                    <span class={cabinetStyle["history-elements__box-title"]}>1-10 из 25</span>

                                    <ul class={cabinetStyle["button-arrows"]}>
                                        <li class={cabinetStyle["button-arrows__prev"]}></li>
                                        <li class={cabinetStyle["button-arrows__next"]}></li>
                                    </ul>

                                </div>

                            </div>

                        </div>


                        <div class={cabinetStyle["history-box"]}>

                            <div class={cabinetStyle["history-box__title"]}><span>Журнал</span></div>

                            <div class={cabinetStyle["history-box__cont scrollbar-tab"]}>

                                <table class={cabinetStyle["history-tab"]}>

                                    <thead>
                                    <tr>
                                        <td><span>Запись</span></td>
                                        <td><span>Время</span></td>
                                        <td><span>Сумма (BTC)</span></td>
                                        <td><span>Баланс (BTC)</span></td>
                                        <td><span>Сумма (ETH)</span></td>
                                        <td><span>Баланс (ETH)</span></td>
                                        <td><span>Сумма (DASH)</span></td>
                                        <td><span>Баланс (DASH)</span></td>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>ETHASH payout (ETH)</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                    </tr>
                                    <tr>
                                        <td>ETHASH payout (ETH)</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                    </tr>
                                    <tr>
                                        <td>ETHASH payout (ETH)</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                    </tr>
                                    <tr>
                                        <td>ETHASH payout (ETH)</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                        <td>0.000000056</td>
                                    </tr>
                                    </tbody>

                                </table>

                            </div>

                            <div class={cabinetStyle["history-elements"]}>

                                <div class={cabinetStyle["history-elements__box"] + cabinetStyle["history-elements__box--input"]}>

                                    <input class={cabinetStyle["inputText"] +' ' + cabinetStyle["inputText--searchMin"]} type="text" placeholder="Поиск"/>

                                </div>

                                <div class={cabinetStyle["history-elements__box history-elements__box--select"]}>

                                    <span class={cabinetStyle["history-elements__box-title"]}>Отображать</span>

                                    <div class={cabinetStyle["select"]}>
                                        <select class="selectpicker">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                    </div>

                                </div>

                                <div class={cabinetStyle["history-elements__box"] + ' ' +  cabinetStyle["history-elements__box--button"]}>

                                    <span class={cabinetStyle["history-elements__box-title"]}>1-10 из 25</span>

                                    <ul class={cabinetStyle["button-arrows"]}>
                                        <li class={cabinetStyle["button-arrows__prev"]}></li>
                                        <li class={cabinetStyle["button-arrows__next"]}></li>
                                    </ul>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className={cabinetStyle["hFooter"]}></div>
            </div>
        );
    }
}

export default History;