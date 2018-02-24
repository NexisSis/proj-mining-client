import React from "react";
import HashGraphNav from "./HashGraphNav";
import HashGraphBalance from "./HashGraphBalance";
import HashGraphReturnGraph from "./HashGraphReturnGraph";
import HashGraphReturn from "./HashGraphReturn";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class HashGraph extends React.Component {
    render() {
        return (
            <div class={cabinetStyle["graphics-cont"]}>

                <div class={cabinetStyle["graphics-nav"]}>
                    <span class={cabinetStyle["graphics-title"]}><b></b>{this.props.name}</span>
                    <HashGraphNav/>
                </div>
                <div class={cabinetStyle["graphics-box"]}>
                    <HashGraphBalance/>
                </div>

                <div class={cabinetStyle["graphics-cont__left"]}>
                    <div class={cabinetStyle["graphics-box"]}>
                        <HashGraphReturnGraph/>
                    </div>
                </div>

                <div class={cabinetStyle["graphics-cont__right"]}>

                    <div class={cabinetStyle["graphics-box"]}>
                        <HashGraphReturn/>
                    </div>

                </div>

            </div>
        );
    }
}

export default HashGraph;