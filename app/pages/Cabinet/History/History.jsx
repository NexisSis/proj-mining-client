import React from "react";
import HeaderTitle from "app/components/Html/HeaderTitle";

class History extends React.Component {
    render() {
        return (
            <div class="content">

                <HeaderTitle name={"История"}/>

                <div class="history">

                    <div class="cont">
                        <div class="history-box">
                            <div class="history-box__title"><span>Выводы</span></div>
                            <div class="history-box__cont scrollbar-tab">
                                <table class="history-tab">
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
                                        <td><span class="color-red">Истек</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span class="color-green">Обработан</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span class="color-red">Истек</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    <tr>
                                        <td>456123</td>
                                        <td>11.01.18 09:59</td>
                                        <td>0.1 MH/s</td>
                                        <td><span class="color-green">Обработан</span></td>
                                        <td>456123</td>
                                        <td>456123</td>
                                    </tr>
                                    </tbody>

                                </table>

                            </div>

                            <div class="history-elements">

                                <div class="history-elements__box history-elements__box--input">

                                    <input class="inputText inputText--searchMin" type="text" placeholder="Поиск"/>

                                </div>

                                <div class="history-elements__box history-elements__box--select">

                                    <span class="history-elements__box-title">Отображать</span>

                                    <div class="select">
                                        <select class="selectpicker">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="history-elements__box history-elements__box--button">

                                    <span class="history-elements__box-title">1-10 из 25</span>

                                    <ul class="button-arrows">
                                        <li class="button-arrows__prev"></li>
                                        <li class="button-arrows__next"></li>
                                    </ul>

                                </div>

                            </div>

                        </div>


                        <div class="history-box">

                            <div class="history-box__title"><span>Журнал</span></div>

                            <div class="history-box__cont scrollbar-tab">

                                <table class="history-tab">

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

                            <div class="history-elements">

                                <div class="history-elements__box history-elements__box--input">

                                    <input class="inputText inputText--searchMin" type="text" placeholder="Поиск"/>

                                </div>

                                <div class="history-elements__box history-elements__box--select">

                                    <span class="history-elements__box-title">Отображать</span>

                                    <div class="select">
                                        <select class="selectpicker">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="history-elements__box history-elements__box--button">

                                    <span class="history-elements__box-title">1-10 из 25</span>

                                    <ul class="button-arrows">
                                        <li class="button-arrows__prev"></li>
                                        <li class="button-arrows__next"></li>
                                    </ul>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="hFooter"></div>
            </div>
        );
    }
}

export {History};