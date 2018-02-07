import React from "react"
import NavLink from "../NavLink"
export default class Nav extends React.Component{
    render(){
        return(
            <div>
                <ul class="menu">
                    <li class="menu-buy"><NavLink href={'#'} name={'Купить хешрейт'}/></li>
                    <li class="menu-room active"><NavLink href={'#'} name={'Личный кабинет'}/></li>
                    <li class="menu-history"><NavLink href={'#'} name={'Личный История'}/></li>
                    <li class="menu-voucher"><NavLink href={'#'} name={'Ваучер'}/></li>
                    <li class="menu-referrals"><NavLink href={'#'} name={'Рефералы'}/></li>
                    <li class="menu-settings"><NavLink href={'#'} name={'Настройки'}/></li>
                    <li class="menu-help"><NavLink href={'#'} name={'Помощь'}/></li>
                    <li class="menu-wallet"><NavLink href={'#'} name={'BTC Wallet'}/></li>
                </ul>

                <ul class="entrance">
                     <li class="entrance-enter"><NavLink href={'#'} name={'Выйти'}/></li>
                 </ul>
            </div>

    )
    }
}