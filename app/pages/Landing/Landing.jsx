import React from "react";
import {Header} from "app/components/Html/Header";

class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header isIndex='true' name={'Облачный майнинг'}/>
                <div class="startNow">

                    <div class="container-fluid">

                        <div class="title"><h2>Начни майнинг криптовалют прямо сейчас</h2></div>

                        <div class="startNow-cont">

                            <div class="startNow-box startNow-box--instantActivation">
                                <h3>Мгновенная активация</h3>
                                <div class="startNow-box__text">
                                    <p>Вы начинаете майнить сразу после поступления оплаты! Ежедневные начисления</p>
                                </div>
                            </div>

                            <div class="startNow-box startNow-box--quickOutput">
                                <h3>Быстрый вывод</h3>
                                <div class="startNow-box__text">
                                    <p>Удобный и быстрый вывод криптовалюты с возможностью реинвестирования</p>
                                </div>
                            </div>

                            <div class="startNow-box startNow-box--statistics">
                                <h3>Статистика</h3>
                                <div class="startNow-box__text">
                                    <p>Статискика ежедневных начислений и прогнозы по вашим доходам всегда на вашем
                                        экране</p>
                                </div>
                            </div>

                            <div class="startNow-box startNow-box--neuralNetwork">
                                <h3>Нейронная сеть</h3>
                                <div class="startNow-box__text">
                                    <p>Наша програмное обеспечение использует нейронные сети и искуственный интелект для
                                        выбора оптимального пула. Таким образом вы получаете максимальный возврат от
                                        купленной мощности</p>
                                </div>
                            </div>

                            <div class="startNow-box startNow-box--security">
                                <h3>Безопасность</h3>
                                <div class="startNow-box__text">
                                    <p>Компания сертифицирована согласно требованиям стандарта PCI-DSS</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div class="contText">

                    <div class="container-fluid">

                        <div class="row">

                            <div class="col-lg-6 col-md-6">

                                <div class="title"><h2>O нас</h2></div>
                                <div class="textBox">
                                    <p>Наша програмное обеспечение использует нейронные сети и искуственный интелект для
                                        выбора оптимального пула. Таким образом вы получаете максимальный возврат от
                                        купленной мощности. Статискика ежедневных начислений и прогнозы по вашим доходам
                                        всегда на вашем экране. Удобный и быстрый вывод криптовалюты с возможностью
                                        реинвестирования. Наша програмное обеспечение использует нейронные сети и
                                        искуственный интелект для выбора оптимального пула. Таким образом вы получаете
                                        максимальный возврат от купленной мощности. Статискика ежедневных</p>
                                </div>
                                <a class="button" href="javascript:void(0)">Подробнее</a>

                            </div>

                            <div class="col-lg-6 col-md-6">

                                <div class="contImg">
                                    <a href="javascript:void(0)">
                                        {/*<img src={about} alt='about'/>*/}
                                    </a>
                                    <div class="contImg__play"></div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div class="tariff">

                    <div class="container-fluid">

                        <div class="title"><h2>Выберите подходящий тариф и начните зарабатывать прямо сейчас!</h2></div>

                        <div class="tariff-cont">

                            <div class="tariff-box">

                                <div class="tariff-block">
                                    <span class="tariff-block__title">Облачный майнинг<b>Scrypt</b></span>
                                    <ul class="tariff-block__list">
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span class="tariff-block__price"><b>$7.50</b>за 10 GH/s </span>
                                    <a class="button button--tariffBuy" href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                            <div class="tariff-box">

                                <div class="tariff-block">
                                    <span class="tariff-block__title">Облачный майнинг<b>Scrypt</b></span>
                                    <ul class="tariff-block__list">
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span class="tariff-block__price"><b>$7.50</b>за 10 GH/s </span>
                                    <a class="button button--tariffBuy" href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                            <div class="tariff-box">

                                <div class="tariff-block">
                                    <span class="tariff-block__title">Облачный майнинг<b>Scrypt</b></span>
                                    <ul class="tariff-block__list">
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span class="tariff-block__price"><b>$7.50</b>за 10 GH/s </span>
                                    <a class="button button--tariffBuy" href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                            <div class="tariff-box">

                                <div class="tariff-block">
                                    <span class="tariff-block__title">Облачный майнинг<b>Scrypt</b></span>
                                    <ul class="tariff-block__list">
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span class="tariff-block__price"><b>$7.50</b>за 10 GH/s </span>
                                    <a class="button button--tariffBuy" href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                            <div class="tariff-box">

                                <div class="tariff-block">
                                    <span class="tariff-block__title">Облачный майнинг<b>Scrypt</b></span>
                                    <ul class="tariff-block__list">
                                        <li>Минимальный Хэшрейт:<b>1 MH/s</b></li>
                                        <li>Плата за обслуживание: <b>0.005 $ / 1 MH/s / 24h</b></li>
                                        <li>Оборудование: <b>HashCoins SCRYPT</b></li>
                                        <li>Автоматические начисления в BTC</li>
                                        <li>1 год контракт</li>
                                    </ul>
                                    <span class="tariff-block__price"><b>$7.50</b>за 10 GH/s </span>
                                    <a class="button button--tariffBuy" href="javascript:void(0)">Купить</a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div class="contText">

                    <div class="container-fluid">

                        <div class="row">

                            <div class="col-lg-6 col-md-6">

                                <div class="title"><h2>Мониторинг</h2></div>
                                <div class="textBox">
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
                                <a class="button" href="javascript:void(0)">Подробнее</a>

                            </div>

                            <div class="col-lg-6 col-md-6">

                                <div class="contImg">
                                    <a href="javascript:void(0)">
                                        {/*<img src={monitoring} alt="img"/>*/}
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div class="hFooter"></div>


            </div>
        );
    }
}

export {Landing};