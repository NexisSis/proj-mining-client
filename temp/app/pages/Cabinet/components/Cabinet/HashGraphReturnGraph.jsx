import React from "react";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class HashGraphReturnGraph extends React.Component {
    render() {
        //<img src="pictures/graphics/graphic.png" alt="graphic"/>
        return (
            <div>
                <div class={cabinetStyle["graphics-box__title"]}><span>Доходность за 1 TH/s</span></div>

                <div class={cabinetStyle["graphics-box__cont"]}>

                    <div class={cabinetStyle["graphics-box__value"]}>

                        <ul class={cabinetStyle["graphics-box__list-y"]}>
                            <li><b>0.0000125</b><b>$ 4.5</b></li>
                            <li><b>0.0000100</b><b>$ 3.5</b></li>
                            <li><b>0.0000075</b><b>$ 2.5</b></li>
                            <li><b>0.0000050</b><b>$ 1.5</b></li>
                            <li><b>0.0000025</b><b>$ 0.5</b></li>
                        </ul>

                        <ul class={cabinetStyle["graphics-box__list-x"]}>
                            <li>01.01</li>
                            <li>01.02</li>
                            <li>01.03</li>
                            <li>01.04</li>
                            <li>01.05</li>
                            <li>01.06</li>
                            <li>01.07</li>
                        </ul>

                        <div class={cabinetStyle["graphics-box__value-chart"]}>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default HashGraphReturnGraph;