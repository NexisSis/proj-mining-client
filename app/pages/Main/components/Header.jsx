import React from "react";
import {Link} from 'react-router-dom';
import mainStyle from "app/pages/Main/assets/css/main.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: props.path,
            isIndex: true,
            name: 'Облачный майнинг'
        };

        this.onLanguageClick = this.onLanguageClick.bind(this);

    }

    componentWillMount() {
        this.resolvePath(this.props.path);
    }

    componentWillReceiveProps(nextProps) {
        this.resolvePath(nextProps.path);
    }

    componentDidMount() {

    }

    //REFFACTOR. SET UP HEADER PARAMETERS BY PASSING THROUGH EACH COMPONENT
    resolvePath(path) {
        switch (path) {
            case '/': {
                this.setState({
                    path: path,
                    isIndex: true,
                    name: 'Облачный майнинг'
                });
                break;
            }
            case '/register': {
                this.setState({
                    path: path,
                    isIndex: false,
                    name: 'Регистрация'
                });
                break;
            }
            case '/register-success': {
                this.setState({
                    path: path,
                    isIndex: false,
                    name: 'Подтверждение регистрации'
                });
                break;
            }
            case '/login': {
                this.setState({
                    path: path,
                    isIndex: false,
                    name: 'Логин'
                });
                break;
            }
            case '/login-bad': {
                this.setState({
                    path: path,
                    isIndex: false,
                    name: 'Логин'
                });
                break;
            }
            case '/confirmation': {
                this.setState({
                    path: path,
                    isIndex: false,
                    name: 'Подтверждение'
                });
                break;
            }

        }
    }


    onLanguageClick(event) {
        console.log(event);
    }


    render() {
        let clouds = '';
        if (this.state.isIndex) {
            clouds = (
                <div className={mainStyle["header-clouds"]}/>
            );
        }


        return (
            <header
                className={this.state.isIndex ? mainStyle.header + ' ' + mainStyle['header--home'] : mainStyle.header}>
                {clouds}

                <div className={mainStyle["header-cont"] + ' ' + mainStyle["container-fluid"]}>

                    <div className={mainStyle.row}>

                        <div className={mainStyle["col-lg-8"] + ' ' + mainStyle["col-md-8"]}>

                            <Link className={mainStyle.logo} to="/"/>

                            <ul className={mainStyle.menu}>
                                <li><Link to="/opportunities">Возможности</Link></li>
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

                            <div className={mainStyle.mobileMenu}>
                                <span/>
                                <span/>
                                <span/>
                            </div>

                        </div>

                        <div className={mainStyle["col-lg-4"] + ' ' + mainStyle["col-md-4"]}>

                            <div className={mainStyle["header-dropDown"]}>

                                <div className={mainStyle.language}>
                                    <span className={mainStyle.language__current}>RU</span>
                                    <ul className={mainStyle.language__list} onChange={this.onLanguageClick}>
                                        <li><a onClick={this.onLanguageClick} href="javascript:void(0)">RU</a></li>
                                        <li><a onClick={this.onLanguageClick} href="javascript:void(0)">EN</a></li>
                                    </ul>
                                </div>

                                <ul className={mainStyle["reg-menu"]}>
                                    <li><Link className={mainStyle.button} to="javascript:void(0)" data-toggle={mainStyle.modal}
                                           data-target="#login" onClick={(e) => e.preventDefault()}>Войти</Link></li>
                                    <li><Link to={'register'}
                                              className={mainStyle.button + ' ' + mainStyle["button--orange"]}>Регистрация</Link>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={mainStyle["header-title"] + ' ' + mainStyle["container-fluid"]}>

                    <div
                        className={this.state.isIndex ? mainStyle.titleBox + ' ' + mainStyle['titleBox--main'] : mainStyle.titleBox + ' ' + mainStyle['titleBox--alignment']}>
                        <h1>{this.state.name}</h1></div>

                </div>

            </header>

        );
    }
}

export {Header};