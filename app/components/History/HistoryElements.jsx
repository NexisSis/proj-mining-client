import React from "react";

class HistoryElements extends React.Component {
    render() {
        return (
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
        );
    }
}

export {HistoryElements};


