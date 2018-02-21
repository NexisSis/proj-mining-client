import React from "react";
import NavLink from "app/pages/Cabinet/components/Common/NavLink";

class HashGraphNav extends React.Component {
    render() {
        return (
            <ul class="graphics-button">
                <li><NavLink classNavName={"button button--yellow"} href={"#"} name={"Купить хэш мощность"}/></li>
                <li><NavLink classNavName={"button"} href={"#"} name={"Вывод"}/></li>
                <li><NavLink classNavName={"button"} href={"#"} name={"Реинвестировать"}/></li>
            </ul>
        );
    }
}

export {HashGraphNav};