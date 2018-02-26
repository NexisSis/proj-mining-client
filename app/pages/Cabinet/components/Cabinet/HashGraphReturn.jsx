import React from "react";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class HashGraphReturn extends React.Component {
    render() {
        return (
            <div>
                <div class={cabinetStyle["graphics-box__title"]}><span>Доходность за 1 TH/s</span></div>

                <div class={cabinetStyle["graphics-box__tab"]}>

                    <table>
                        <tbody>
                            <tr>
                                <td>День</td>
                                <td>5 ETC</td>
                                <td>0.5 USD</td>
                            </tr>
                            <tr>
                                <td>Неделя</td>
                                <td>12 ETC</td>
                                <td>0.9 USD</td>
                            </tr>
                            <tr>
                                <td>Месяц</td>
                                <td>25 ETC</td>
                                <td>1.5 USD</td>
                            </tr>
                            <tr>
                                <td>6 Месяцев</td>
                                <td>36 ETC</td>
                                <td>2.5 USD</td>
                            </tr>
                            <tr>
                                <td>Год</td>
                                <td>47 ETC</td>
                                <td>3.5 USD</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default HashGraphReturn;