import React from "react";
import {NavLink} from "app/pages/Cabinet/components/Common/NavLink";

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
            {class: 'menu-buy', name: 'Купить хешрейт', href: '/'},
            {class: 'menu-room', name: 'Личный кабинет', href: '/'},
            {class: 'menu-history', name: 'История', href: 'history'},
            {class: 'menu-voucher', name: 'Ваучер', href: '/'},
            {class: 'menu-referrals', name: 'Рефералы', href: '/'},
            {class: 'menu-settings', name: 'Настройки', href: 'settings'},
            {class: 'menu-help', name: 'Помощь', href: '/'},
            {class: 'menu-wallet', name: 'BTC Wallet', href: '/'},
        ];
        const tabs = nav.map(function (el, i) {
            return <li key={i}
                       class={el.class + ' ' + this.isActive(i)} onClick={() => this.setActive(i)}>
                <NavLink href={el.href} name={el.name}/>
            </li>;
        }, this);
        return (
            <div>
                <ul class="menu">
                    {tabs}
                </ul>

                <ul class="entrance">
                    <li class={'entrance-enter ' + this.isActive(nav.length)}
                        onClick={() => this.setActive(nav.length)}><NavLink href={'#'} name={'Выйти'}/></li>
                </ul>
            </div>

        );
    }
}

export {Nav};