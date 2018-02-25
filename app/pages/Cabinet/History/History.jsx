import React from "react";
import HeaderTitle from "app/pages/Cabinet/components/Common/HeaderTitle";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class History extends React.Component {
    render() {
        return (
            <div className={cabinetStyle["content"]}>

                <HeaderTitle name={"История"}/>

                <div className={cabinetStyle["history"]}>

                    <div className={cabinetStyle["cont"]}>
                        <div className={cabinetStyle["history-box"]}>
                            <div className={cabinetStyle["history-box__title"]}><span>Выводы</span></div>
                            <div className={cabinetStyle["history-box__cont"] + ' ' + cabinetStyle["scrollbar-tab"]}>
                                <table className={cabinetStyle["history-tab"]}>
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
                                        <td><span className={cabinetStyle["color-red"]}>Истек</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span className={cabinetStyle["color-green"]}>Обработан</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span className={cabinetStyle["color-red"]}>Истек</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span className={cabinetStyle["color-green"]}>Обработан</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    </tbody>

                                </table>

                            </div>

                            <div className={cabinetStyle["history-elements"]}>

                                <div className={cabinetStyle["history-elements__box"] + ' ' + cabinetStyle["history-elements__box--input"]}>

                                    <input className={cabinetStyle["inputText"] + ' ' + cabinetStyle["inputText--searchMin"]} type="text" placeholder="Поиск"/>

                                </div>

                                <div className={cabinetStyle["history-elements__box"] + cabinetStyle["history-elements__box--select"]}>

                                    <span className={cabinetStyle["history-elements__box-title"]}>Отображать</span>

                                    <div className={cabinetStyle["select"]}>
                                        <select className="selectpicker">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                    </div>

                                </div>

                                <div className={cabinetStyle["history-elements__box"] + ' ' + cabinetStyle["history-elements__box--button"]}>

                                    <span className={cabinetStyle["history-elements__box-title"]}>1-10 из 25</span>

                                    <ul className={cabinetStyle["button-arrows"]}>
                                        <li className={cabinetStyle["button-arrows__prev"]}></li>
                                        <li className={cabinetStyle["button-arrows__next"]}></li>
                                    </ul>

                                </div>

                            </div>

                        </div>


                        <div className={cabinetStyle["history-box"]}>

                            <div className={cabinetStyle["history-box__title"]}><span>Журнал</span></div>

                            <div className={cabinetStyle["history-box__cont scrollbar-tab"]}>

                                <table className={cabinetStyle["history-tab"]}>

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

                            <div className={cabinetStyle["history-elements"]}>

                                <div className={cabinetStyle["history-elements__box"] + cabinetStyle["history-elements__box--input"]}>

                                    <input className={cabinetStyle["inputText"] +' ' + cabinetStyle["inputText--searchMin"]} type="text" placeholder="Поиск"/>

                                </div>

                                <div className={cabinetStyle["history-elements__box history-elements__box--select"]}>

                                    <span className={cabinetStyle["history-elements__box-title"]}>Отображать</span>

                                    <div className={cabinetStyle["select"]}>
                                        <select className="selectpicker">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                    </div>

                                </div>

                                <div className={cabinetStyle["history-elements__box"] + ' ' +  cabinetStyle["history-elements__box--button"]}>

                                    <span className={cabinetStyle["history-elements__box-title"]}>1-10 из 25</span>

                                    <ul className={cabinetStyle["button-arrows"]}>
                                        <li className={cabinetStyle["button-arrows__prev"]}></li>
                                        <li className={cabinetStyle["button-arrows__next"]}></li>
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