import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <footer class="footer">

                    <div class="container-fluid">

                        <div class="row">

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">

                                <div class="footer-title"><h2>Компания</h2></div>
                                <ul class="footer-menu">
                                    <li><a href="javascript:void(0)">О нас</a></li>
                                    <li><a href="javascript:void(0)">Блог</a></li>
                                    <li><a href="javascript:void(0)">Условия пользования</a></li>
                                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                </ul>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">

                                <div class="footer-title"><h2>Помощь</h2></div>
                                <ul class="footer-menu">
                                    <li><a href="javascript:void(0)">Что такое Bitcoin?</a></li>
                                    <li><a href="javascript:void(0)">Что такое майнинг?</a></li>
                                    <li><a href="javascript:void(0)">Как это работает?</a></li>
                                    <li><a href="javascript:void(0)">HelpDesk</a></li>
                                    <li><a href="javascript:void(0)">Партнерская программа</a></li>
                                </ul>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">

                                <div class="footer-title"><h2>Контакты</h2></div>
                                <ul class="footer-menu footer-menu--contacts">
                                    <li class="ic-email"><a href="javascript:void(0)">info@hashflare.io</a></li>
                                    <li class="ic-phone"><a href="javascript:void(0)">+44 406 125 5054</a></li>
                                    <li class="ic-location"><span>Tartu mnt 43 <br /> Tallinn 10128, Estonia</span></li>
                                </ul>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">

                                <div class="footer-title"><h2>Медиа</h2></div>
                                <ul class="footer-menu footer-menu--socialNetworks">
                                    <li class="ic-fb"><a href="javascript:void(0)">Facebook</a></li>
                                    <li class="ic-tw"><a href="javascript:void(0)">Twitter</a></li>
                                    <li class="ic-gl"><a href="javascript:void(0)">Google</a></li>
                                    <li class="ic-yt"><a href="javascript:void(0)">Youtube</a></li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div class="footer-bottom">

                        <div class="container-fluid">

                            <div class="row">

                                <div class="col-lg-6 col-md-6 col-sm-6">

                                    <div class="subscription">
                                        <span class="subscription__title">Подпишитесь на специальные предложения:</span>
                                        <div class="subscription__cont">
                                            <input class="inputText" type="text" placeholder="Ваша эл. почта" />
                                            <input class="button button--orangeLight" type="submit" value="Отправить" />
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6">

                                    <span class="footer-copyright">© 2018. Cloudminig. Все права защищены.</span>

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