import React from "react";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class InputBox extends React.Component {
    render() {
        let userInputType;
        if (this.props.isAvatar) {
            userInputType = (
                <div class={cabinetStyle["addAvatar"]}>
                    <div class={cabinetStyle["addAvatar__button"]}></div>
                </div>
            );
        } else if (this.props.isBirth) {


            userInputType = (
                <div class={cabinetStyle["dateBirth"]}>
                    <div class={cabinetStyle["dateBirth__box"] + cabinetStyle["dateBirth__box--month"]}>

                        <div class={cabinetStyle["select"]}>
                            <select class="selectpicker" data-actionsBox="true">
                                <option>Январь</option>
                                <option>Февраль</option>
                                <option>Март</option>
                                <option>Апрель</option>
                                <option>Май</option>
                                <option>Июнь</option>
                                <option>Июль</option>
                                <option>Август</option>
                                <option>Сентябрь</option>
                                <option>Октябрь</option>
                                <option>Ноябрь</option>
                                <option>Декабрь</option>
                            </select>
                        </div>

                    </div>
                    <div class={cabinetStyle["dateBirth__box"]  + cabinetStyle["dateBirth__box--day"]}>
                        <input class={cabinetStyle["inputText"]} type="text"/>
                    </div>
                    <div class={cabinetStyle["dateBirth__box"] + cabinetStyle["dateBirth__box--year"]}>

                        <div class={cabinetStyle["select"]}>
                            <select class="selectpicker" data-actionsBox="true">
                                <option>1980</option>
                                <option>1981</option>
                                <option>1982</option>
                                <option>1983</option>
                                <option>1984</option>
                                <option>1985</option>
                                <option>1986</option>
                                <option>1987</option>
                                <option>1988</option>
                                <option>1989</option>
                                <option>1990</option>
                                <option>1991</option>
                                <option>1992</option>
                                <option>1993</option>
                                <option>1994</option>
                                <option>1995</option>
                                <option>1996</option>
                                <option>1997</option>
                                <option>1998</option>
                                <option>1999</option>
                                <option>2000</option>
                                <option>2001</option>
                                <option>2002</option>
                                <option>2003</option>
                                <option>2004</option>
                                <option>2005</option>
                                <option>2006</option>
                                <option>2007</option>
                                <option>2008</option>
                                <option>2009</option>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                            </select>
                        </div>

                    </div>
                </div>
            );
        }
        else {
            userInputType = (
                <input class={cabinetStyle["inputText"]} type="text"/>
            );
        }
        return (
            <div class={cabinetStyle['setProfile__box']}>
                <div class={cabinetStyle["setProfile__info"]}><span>{this.props.name}</span></div>
                <div class={cabinetStyle["setProfile__value"]}>
                    {userInputType}
                </div>
            </div>

        );
    }
}

export default InputBox;