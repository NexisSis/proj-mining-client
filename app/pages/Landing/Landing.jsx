import React from "react";
import about from "app/pages/Main/assets/images/pictures/about-us.jpg";
import monitoring from "app/pages/Main/assets/images/pictures/monitoring.jpg";
import mainStyle from "../Main/assets/css/main.css";
class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={mainStyle["startNow"]}>

                    <div className={mainStyle["container-fluid"]}>

                        <div className={mainStyle["title"]}><h2>Начни майнинг криптовалют прямо сейчас</h2></div>

                        <div className={mainStyle["startNow-cont"]}>

                            <div className={mainStyle["startNow-box"] + ' '+ mainStyle["startNow-box--instantActivation"]}>
                                <h3>Мгновенная активация</h3>
                                <div className={mainStyle["startNow-box__text"]}>
                                    <p>Вы начинаете майнить сразу после поступления оплаты! Ежедневные начисления</p>
                                </div>
                            </div>

                            <div className={mainStyle["startNow-box"] + ' ' +  mainStyle["startNow-box--quickOutput"]}>
                                <h3>Быстрый вывод</h3>
                                <div className={mainStyle["startNow-box__text"]}>
                                    <p>Удобный и быстрый вывод криптовалюты с возможностью реинвестирования</p>
                                </div>
                            </div>

                            <div className={mainStyle["startNow-box"] + ' ' + mainStyle["startNow-box--statistics"]}>
                                <h3>Статистика</h3>
                                <div className={mainStyle["startNow-box__text"]}>
                                    <p>Статискика ежедневных начислений и прогнозы по вашим доходам всегда на вашем
                                        экране</p>
                                </div>
                            </div>

                            <div className={mainStyle["startNow-box"] + ' ' +  mainStyle["startNow-box--neuralNetwork"]}>
                                <h3>Нейронная сеть</h3>
                                <div className={mainStyle["startNow-box__text"]}>
                                    <p>Наша програмное обеспечение использует нейронные сети и искуственный интелект для
                                        выбора оптимального пула. Таким образом вы получаете максимальный возврат от
                                        купленной мощности</p>
                                </div>
                            </div>

                            <div className={mainStyle["startNow-box"] + ' '+ mainStyle["startNow-box--security"]}>
                                <h3>Безопасность</h3>
                                <div className={mainStyle["startNow-box__text"]}>
                                    <p>Компания сертифицирована согласно требованиям стандарта PCI-DSS</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div className={mainStyle["contText"]}>

                    <div className={mainStyle["container-fluid"]}>

                        <div className={mainStyle["row"]}>

                            <div className={mainStyle["col-lg-6"] + ' ' + mainStyle["col-md-6"]}>

                                <div className={mainStyle["title"]}><h2>O нас</h2></div>
                                <div className={mainStyle["textBox"]}>
                                    <p>Наша програмное обеспечение использует нейронные сети и искуственный интелект для
                                        выбора оптимального пула. Таким образом вы получаете максимальный возврат от
                                        купленной мощности. Статискика ежедневных начислений и прогнозы по вашим доходам
                                        всегда на вашем экране. Удобный и быстрый вывод криптовалюты с возможностью
                                        реинвестирования. Наша програмное обеспечение использует нейронные сети и
                                        искуственный интелект для выбора оптимального пула. Таким образом вы получаете
                                        максимальный возврат от купленной мощности. Статискика ежедневных</p>
                                </div>
                                <a className={mainStyle["button"]} href="javascript:void(0)">Подробнее</a>

                            </div>
`
                            <div className={mainStyle["col-lg-6"] + ' ' + mainStyle["col-md-6"]}>

                                <div className={mainStyle["contImg"]}>
                                    <a href="javascript:void(0)">
                                        <img src={about} alt='about'/>
                                    </a>
                                    <div className={mainStyle["contImg__play"]}/>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className={mainStyle["tariff"]}>

                    <div className={mainStyle["container-fluid"]}>

                        <div className={mainStyle["title"]}><h2>Выберите подходящий тариф и начните зарабатывать прямо сейчас!</h2></div>

                        <div className={mainStyle["tariff-cont"]}>

                            <div className={mainStyle["tariff-box"]}>

                                <div className={mainStyle["tariff-block"]}>
                                    <span className={mainStyle["tariff-block__title"]}>Облачный майнинг<b>Scrypt</b></span>
                                    <ul className={mainStyle["tariff-block__list"]}>
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span className={mainStyle["tariff-block__price"]}><b>$7.50</b>за 10 GH/s </span>
                                    <a className={mainStyle["button"] + ' ' + mainStyle["button--tariffBuy"]} href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                            <div className={mainStyle["tariff-box"]}>

                                <div className={mainStyle["tariff-block"]}>
                                    <span className={mainStyle["tariff-block__title"]}>Облачный майнинг<b>Scrypt</b></span>
                                    <ul className={mainStyle["tariff-block__list"]}>
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span className={mainStyle["tariff-block__price"]}><b>$7.50</b>за 10 GH/s </span>
                                    <a className={mainStyle["button"] + ' ' + mainStyle["button--tariffBuy"]} href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                            <div className={mainStyle["tariff-box"]}>

                                <div className={mainStyle["tariff-block"]}>
                                    <span className={mainStyle["tariff-block__title"]}>Облачный майнинг<b>Scrypt</b></span>
                                    <ul className={mainStyle["tariff-block__list"]}>
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span className={mainStyle["tariff-block__price"]}><b>$7.50</b>за 10 GH/s </span>
                                    <a className={mainStyle["button"] + ' ' + mainStyle["button--tariffBuy"]} href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                            <div className={mainStyle["tariff-box"]}>

                                <div className={mainStyle["tariff-block"]}>
                                    <span className={mainStyle["tariff-block__title"]}>Облачный майнинг<b>Scrypt</b></span>
                                    <ul className={mainStyle["tariff-block__list"]}>
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span className={mainStyle["tariff-block__price"]}><b>$7.50</b>за 10 GH/s </span>
                                    <a className={mainStyle["button"] + ' ' + mainStyle["button--tariffBuy"]} href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                            <div className={mainStyle["tariff-box"]}>

                                <div className={mainStyle["tariff-block"]}>
                                    <span className={mainStyle["tariff-block__title"]}>Облачный майнинг<b>Scrypt</b></span>
                                    <ul className={mainStyle["tariff-block__list"]}>
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span className={mainStyle["tariff-block__price"]}><b>$7.50</b>за 10 GH/s </span>
                                    <a className={mainStyle["button"] + ' ' + mainStyle["button--tariffBuy"]} href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className={mainStyle["contText"]}>

                    <div className={mainStyle["container-fluid"]}>

                        <div className={mainStyle["row"]}>

                            <div className={mainStyle["col-lg-6"] + ' ' + mainStyle["col-md-6"]}>

                                <div className={mainStyle["title"]}><h2>Мониторинг</h2></div>
                                <div className={mainStyle["textBox"]}>
                                    <p>Наша програмное обеспечение использует нейронные сети и искуственный интелект для
                                        выбора оптимального пула. Таким образом вы получаете максимальный возврат от
                                        купленной мощности. Статискика ежедневных начислений и прогнозы по вашим доходам
                                        всегда на вашем экране. Удобный и быстрый вывод криптовалюты с возможностью
                                        реинвестирования. Наша програмное обеспечение использует нейронные сети и
                                        искуственный интелект для выбора оптимального пула. Таким образом вы получаете
                                        максимальный возврат от купленной мощности. Статискика ежедневных начислений и
                                        прогнозы по вашим доходам всегда на вашем экране. Удобный и быстрый вывод
                                        криптовалюты с возможностью реинвестирования.</p>
                                </div>
                                <a className={mainStyle["button"]} href="javascript:void(0)">Подробнее</a>

                            </div>

                            <div className={mainStyle["col-lg-6"] + ' '+ mainStyle["col-md-6"]}>

                                <div className={mainStyle["contImg"]}>
                                    <a href="javascript:void(0)">
                                        <img src={monitoring} alt="img"/>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className={mainStyle["hFooter"]}></div>


            </div>
        );
    }
}

export {Landing};