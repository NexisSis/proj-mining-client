import React from "react"
import HistoryBox from "./HistoryTitle"
import HistoryElements from "./HistoryElements";
export default class HistoryBox extends React.Component {
    render() {
        return (
            <div class="history-box">
                <HistoryTitle name = {'Покупки'}/>
                <div class="history-box__cont scrollbar-tab">
                    <table class="history-tab">
                        <thead>
                        <tr>
                            <td><span class="tab-arrow">#</span></td>
                            <td><span>Товар</span></td>
                            <td><span>Кол-во</span></td>
                            <td><span>Итого</span></td>
                            <td><span>Оплата</span></td>
                            <td><span>Запуск</span></td>
                            <td><span>Окончание</span></td>
                            <td><span>Время</span></td>
                            <td><span>Статус</span></td>
                        </tr>
                        </thead>


                        <tbody>
                        <tr>
                            <td>456123</td>
                            <td>ETHASH хэшрейт</td>
                            <td>0.1 MH/s</td>
                            <td>2.20 USD</td>
                            <td>Universepay transfer</td>
                            <td>09.01.2018</td>
                            <td>09.01.2019</td>
                            <td>11.01.18 09:59</td>
                            <td><span class="color-red">Истек</span></td>
                        </tr>
                        <tr>
                            <td>456123</td>
                            <td>ETHASH хэшрейт</td>
                            <td>0.1 MH/s</td>
                            <td>2.20 USD</td>
                            <td>Universepay transfer</td>
                            <td>09.01.2018</td>
                            <td>09.01.2019</td>
                            <td>11.01.18 09:59</td>
                            <td><span class="color-green">Обработан</span></td>
                        </tr>
                        <tr>
                            <td>456123</td>
                            <td>ETHASH хэшрейт</td>
                            <td>0.1 MH/s</td>
                            <td>2.20 USD</td>
                            <td>Universepay transfer</td>
                            <td>09.01.2018</td>
                            <td>09.01.2019</td>
                            <td>11.01.18 09:59</td>
                            <td><span class="color-red">Истек</span></td>
                        </tr>
                        <tr>
                            <td>456123</td>
                            <td>ETHASH хэшрейт</td>
                            <td>0.1 MH/s</td>
                            <td>2.20 USD</td>
                            <td>Universepay transfer</td>
                            <td>09.01.2018</td>
                            <td>09.01.2019</td>
                            <td>11.01.18 09:59</td>
                            <td><span class="color-green">Обработан</span></td>
                        </tr>
                        </tbody>

                    </table>

                </div>

                <HistoryElements />

            </div>
        )
    }
}


