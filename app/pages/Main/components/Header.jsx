import React from "react";
import {Link} from 'react-router-dom';
import mainStyle from "app/pages/Main/assets/css/main.css";


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            path: props.path,
            isIndex: true,
            name: 'Облачный майнинг'
        };
    }

    componentWillMount() {
        this.resolvePath(this.props.path);
    }

    componentWillReceiveProps(nextProps) {
        this.resolvePath(nextProps.path);
    }

    resolvePath(path){
        switch(path){
            case '/': {
                this.setState({
                    path:path,
                    isIndex:true,
                    name:'Облачный майнинг'
                });
                break;
            }
            case '/register': {
                this.setState({
                    path: path,
                    isIndex:false,
                    name:'Регистрация'
                });
                break;
            }
            case '/register-success': {
                this.setState({
                    path: path,
                    isIndex:false,
                    name:'Подтверждение регистрации'
                });
                break;
            }
            case '/login': {
                this.setState({
                    path: path,
                    isIndex:false,
                    name:'Логин'
                });
                break;
            }
            case '/login-bad': {
                this.setState({
                    path: path,
                    isIndex:false,
                    name:'Логин'
                });
                break;
            }

        }
    }

    render() {
        let clouds = '';
        if (this.state.isIndex) {
            clouds = (
                <div class={mainStyle["header-clouds"]}></div>
            );
        }

      //<li><a class={mainStyle["button"]} href="#" data-toggle="modal" data-target="#login">Войти</a></li>

        return (
                <header class={this.state.isIndex ? mainStyle['header'] + ' ' + mainStyle['header--home'] : mainStyle['header']}>
                    {clouds}

                    <div class={mainStyle["header-cont"] + ' ' + mainStyle["container-fluid"]}>

                        <div class={mainStyle["row"]}>

                            <div class={mainStyle["col-lg-8"] + ' ' + mainStyle["col-md-8"]}>

                                <Link class={mainStyle["logo"]} to="/"/>

                                <ul class={mainStyle["menu"]}>
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

                                <div class={mainStyle["mobileMenu"]}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </div>

                            <div class={mainStyle["col-lg-4"] + ' ' + mainStyle["col-md-4"]}>

                                <div class={mainStyle["header-dropDown"]}>

                                    <div class={mainStyle["language"]}>
                                        <span class={mainStyle["language__current"]}>RU</span>
                                        <ul class={mainStyle["language__list"]}>
                                            <li><a href="javascript:void(0)">RU</a></li>
                                            <li><a href="javascript:void(0)">EN</a></li>
                                        </ul>
                                    </div>

                                    <ul class={mainStyle["reg-menu"]}>
                                        <li><a class={mainStyle["button"]} href="/login" data-target="#login">Войти</a></li>
                                        <li><Link to={'register'} class={mainStyle['button'] + ' '+ mainStyle["button--orange"]}>Регистрация</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class={mainStyle["header-title"] + ' ' + mainStyle["container-fluid"]}>

                        <div class={this.state.isIndex ? mainStyle['titleBox'] + ' ' +mainStyle['titleBox--main'] : mainStyle['titleBox'] + ' ' + mainStyle['titleBox--alignment']}>
                            <h1>{this.state.name}</h1></div>

                    </div>

                </header>

        );
    }
}

export {Header};