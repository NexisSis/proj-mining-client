import React from "react"
import Header from "../components/Header"
export default class ContactUs extends React.Component{

    render(){
        return(
            <div>
                <Header name={'Связаться с нами'}/>
                <div class="contact">

                <div class="container-fluid">

                    <div class="form-cont">

                        <form class="form">

                            <div class="form-box">
                                <span class="form-box__title">Пожалуйста, выберите тип запроса</span>
                                <div class="form-box__value">
                                    <div class="select">
                                        <select class="selectpicker">
                                            <option>Проблемы с покупкой</option>
                                            <option>Проблемы с покупкой</option>
                                            <option>Проблемы с покупкой</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-box">
                                <span class="form-box__title">Эл. почта</span>
                                <div class="form-box__value">
                                    <input class="inputText" type="text" placeholder="cloudminer@mail.com"/>
                                </div>
                            </div>

                            <div class="form-box">
                                <span class="form-box__title">Тема</span>
                                <div class="form-box__value">
                                    <input class="inputText" type="text" />
                                </div>
                            </div>

                            <div class="form-box">
                                <span class="form-box__title">Описание</span>
                                <div class="form-box__value">
                                    <textarea class="inputTextarea" rows="6"></textarea>
                                </div>
                            </div>

                            <div class="form-box">
                                <span class="form-box__title">Прикрепить файлы</span>

                                <div class="form-box__group">
                                    <div class="form-box__value form-box__group_value">
                                        <input class="inputText" type="text" aria-describedby="basic-addon" placeholder="D:\User Files\Downloads\Document.docx"/>
                                    </div>
                                    <div class="form-box__append">
                                        <span class="form-box__text" id="basic-addon"><i class="remove"></i></span>
                                    </div>
                                </div>

                                <a class="button button--add" href="javascript:void(0)"><i class="add"></i>Добавить файл</a>
                            </div>

                            <div class="form-box">

                                <div class="form-captcha">
                                    <span class="form-captcha__text"><b>captcha</b></span>
                                </div>

                            </div>

                            <div class="form-box">

                                <input class="button button--orangeBig" type="submit" value="Отправить" />

                            </div>

                        </form>

                    </div>

                </div>
                <div class="hFooter"></div>
            </div>
            </div>

        );
    }
}