import React from "react";
import NavLink from "app/pages/Cabinet/components/Common/NavLink";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isActive: 1};
        this.isActive = this.isActive.bind(this);
    }

    isActive(id) {
        return (this.state.isActive === id) ? 'active' : '';
    }

    setActive(id) {
        this.state = {isActive: id};
    }

    render() {
        const nav = [
            {class: 'menu-buy', name: 'Купить хешрейт', href: '/cabinet/'},
            {class: 'menu-room', name: 'Личный кабинет', href: '/cabinet/'},
            {class: 'menu-history', name: 'История', href: '/cabinet/history'},
            {class: 'menu-voucher', name: 'Ваучер', href: '/cabinet'},
            {class: 'menu-referrals', name: 'Рефералы', href: '/cabinet'},
            {class: 'menu-settings', name: 'Настройки', href: '/cabinet/settings'},
            {class: 'menu-help', name: 'Помощь', href: '/cabinet'},
            {class: 'menu-wallet', name: 'BTC Wallet', href: '/cabinet'},
        ];
        const tabs = nav.map(function (el, i) {
            return <li key={i}
                       class={cabinetStyle[el.class] + ' ' + cabinetStyle[this.isActive(i)]} onClick={() => this.setActive(i)}>
                <NavLink href={el.href} name={el.name}/>
            </li>;
        }, this);
        return (
            <div>
                <ul class={cabinetStyle["menu"]}>
                    {tabs}
                </ul>

                <ul class={cabinetStyle["entrance"]}>
                    <li class={cabinetStyle['entrance-enter']+' ' + cabinetStyle[this.isActive(nav.length)]}
                        onClick={() => this.setActive(nav.length)}><NavLink href={'#'} name={'Выйти'}/></li>
                </ul>
            </div>

        );
    }
}

export default Nav;