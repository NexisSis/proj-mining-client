import React from "react"
import { Link } from 'react-router-dom'

export default class Header extends React.Component{

    render(){
        let clouds ='';
        if(this.props.isIndex){
            clouds=(
                <div class="header-clouds"></div>
            );
        };
        return(
            <div>
                <header class={this.props.isIndex?'header header--home':'header'}>
                    {clouds}

                    <div class="header-cont container-fluid">

                        <div class="row">

                            <div class="col-lg-8 col-md-8">

                                <a class="logo" href="javascript:void(0)"></a>

                                <ul class="menu">
                                    <li><a href="javascript:void(0)">Возможности</a></li>
                                    <li><a href="javascript:void(0)">Цена</a></li>
                                    <li><span>Что это?</span>
                                        <ul>
                                            <li><a href="javascript:void(0)">Где это?</a></li>
                                            <li><a href="javascript:void(0)">Когда это?</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Медиа</a></li>
                                    <li><span>О нас</span>
                                        <ul>
                                            <li><a href="javascript:void(0)">Пресс-релиз</a></li>
                                            <li><a href="javascript:void(0)">Команда</a></li>
                                            <li><a href="javascript:void(0)">Наш дата-центр</a></li>
                                        </ul>
                                    </li>
                                </ul>

                                <div class="mobileMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </div>

                            <div class="col-lg-4 col-md-4">

                                <div class="header-dropDown">

                                    <div class="language">
                                        <span class="language__current">RU</span>
                                        <ul class="language__list">
                                            <li><a href="javascript:void(0)">RU</a></li>
                                            <li><a href="javascript:void(0)">EN</a></li>
                                        </ul>
                                    </div>

                                    <ul class="reg-menu">
                                        <li><a class="button" href="javascript:void(0)" data-toggle="modal" data-target="#login">Войти</a></li>
                                        <li> <Link to={'registration'} class={'button button--orange'}>Регистрация</Link></li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="header-title container-fluid">

                        <div class={this.props.isIndex?'titleBox titleBox--main':'titleBox titleBox--alignment'}><h1>{this.props.name}</h1></div>

                    </div>

                </header>
            </div>
        );
    }
}