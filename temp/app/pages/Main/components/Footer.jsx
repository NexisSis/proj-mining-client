import React from "react";
import mainStyle from "app/pages/Main/assets/css/main.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <footer class={mainStyle["footer"]}>

                    <div class={mainStyle["container-fluid"]}>

                        <div class={mainStyle["row"]}>

                            <div class={mainStyle["col-lg-3"] + ' ' + mainStyle["col-md-3"] + ' ' +  mainStyle["col-sm-3"] + ' ' + mainStyle["col-xs-6"]}>

                                <div class={mainStyle["footer-title"]}><h2>Компания</h2></div>
                                <ul class={mainStyle["footer-menu"]}>
                                    <li><a href="javascript:void(0)">О нас</a></li>
                                    <li><a href="javascript:void(0)">Блог</a></li>
                                    <li><a href="javascript:void(0)">Условия пользования</a></li>
                                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                </ul>

                            </div>

                            <div class={mainStyle["col-lg-3"] + ' ' + mainStyle["col-md-3"] + ' ' +  mainStyle["col-sm-3"] + ' ' + mainStyle["col-xs-6"]}>

                                <div class={mainStyle["footer-title"]}><h2>Помощь</h2></div>
                                <ul class={mainStyle["footer-menu"]}>
                                    <li><a href="javascript:void(0)">Что такое Bitcoin?</a></li>
                                    <li><a href="javascript:void(0)">Что такое майнинг?</a></li>
                                    <li><a href="javascript:void(0)">Как это работает?</a></li>
                                    <li><a href="javascript:void(0)">HelpDesk</a></li>
                                    <li><a href="javascript:void(0)">Партнерская программа</a></li>
                                </ul>

                            </div>

                            <div class={mainStyle["col-lg-3"] + ' ' + mainStyle["col-md-3"] + ' ' +  mainStyle["col-sm-3"] + ' ' + mainStyle["col-xs-6"]}>

                                <div class={mainStyle["footer-title"]}><h2>Контакты</h2></div>
                                <ul class={mainStyle["footer-menu"] + ' ' + mainStyle["footer-menu--contacts"]}>
                                    <li class={mainStyle["ic-email"]}><a href="javascript:void(0)">info@hashflare.io</a></li>
                                    <li class={mainStyle["ic-phone"]}><a href="javascript:void(0)">+44 406 125 5054</a></li>
                                    <li class={mainStyle["ic-location"]}><span>Tartu mnt 43 <br /> Tallinn 10128, Estonia</span></li>
                                </ul>

                            </div>

                            <div class={mainStyle["col-lg-3"] + ' ' + mainStyle["col-md-3"] + ' ' +  mainStyle["col-sm-3"] + ' ' + mainStyle["col-xs-6"]}>

                                <div class={mainStyle["footer-title"]}><h2>Медиа</h2></div>
                                <ul class={mainStyle["footer-menu"] + ' ' + mainStyle["footer-menu--socialNetworks"]}>
                                    <li class={mainStyle["ic-fb"]}><a href="javascript:void(0)">Facebook</a></li>
                                    <li class={mainStyle["ic-tw"]}><a href="javascript:void(0)">Twitter</a></li>
                                    <li class={mainStyle["ic-gl"]}><a href="javascript:void(0)">Google</a></li>
                                    <li class={mainStyle["ic-yt"]}><a href="javascript:void(0)">Youtube</a></li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div class={mainStyle["footer-bottom"]}>

                        <div class={mainStyle["container-fluid"]}>

                            <div class={mainStyle["row"]}>

                                <div class={mainStyle["col-lg-6"] + ' ' + mainStyle["col-md-6"] + ' ' +  mainStyle["col-sm-6"]}>

                                    <div class={mainStyle["subscription"]}>
                                        <span class={mainStyle["subscription__title"]}>Подпишитесь на специальные предложения:</span>
                                        <div class={mainStyle["subscription__cont"]}>
                                            <input class={mainStyle["inputText"]} type="text" placeholder="Ваша эл. почта" />
                                            <input class={mainStyle["button"] + ' ' + mainStyle["button--orangeLight"]} type="submit" value="Отправить" />
                                        </div>
                                    </div>

                                </div>

                                <div class={mainStyle["col-lg-6"] + ' ' + mainStyle["col-md-6"] + ' ' +  mainStyle["col-sm-6"]}>

                                    <span class={mainStyle["footer-copyright"]}>© 2018. Cloudminig. Все права защищены.</span>

                                </div>

                            </div>

                        </div>

                    </div>

                </footer>
            </div>

        );
    }
}

export {Footer};