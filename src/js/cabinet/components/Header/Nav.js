import React from "react"
import NavLink from "../NavLink"
export default class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isActive:1};
        this.isActive = this.isActive.bind(this);
    }
     isActive(id){
        return (this.state.isActive === id) ? 'active': '';
     }
     setActive(id){
        this.state = {isActive:id};
     }
    render(){
        const nav = [
            {class:'menu-buy',name:'Купить хешрейт',href:'/cabinet'},
            {class:'menu-room',name:'Личный кабинет',href:'/cabinet'},
            {class:'menu-history',name:'История',href:'/history'},
            {class:'menu-voucher',name:'Ваучер',href:'/cabinet'},
            {class:'menu-referrals',name:'Рефералы',href:'/cabinet'},
            {class:'menu-settings',name:'Настройки',href:'/settings'},
            {class:'menu-help',name:'Помощь',href:'/cabinet'},
            {class:'menu-wallet',name:'BTC Wallet',href:'/cabinet'},
        ];
        const tabs = nav.map(function(el,i){
            return <li key={i}
                       class={el.class + ' ' + this.isActive(i)} onClick={()=>this.setActive(i)}>
                       <NavLink href={el.href} name={el.name} />
                    </li>
        },this);
        return(
            <div>
                <ul class="menu">
                    {tabs}
                </ul>

                <ul class="entrance">
                     <li class={'entrance-enter '+this.isActive(nav.length)} onClick={()=>this.setActive(nav.length)}><NavLink href={'#'} name={'Выйти'} /></li>
                 </ul>
            </div>

    )
    }
}