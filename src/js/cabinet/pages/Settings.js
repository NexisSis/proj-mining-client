import React from "react"
import HeaderTitle from "../components/HeaderTitle"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import InputBox from "../components/Settings/InputBox"

export default class Settings extends React.Component {
    render() {

        return (
            <div>
            <div class="content">
                <HeaderTitle name='Настройки'/>

                <div class="settings">

                    <div class="cont">

                        <Tabs selectedTabClassName='active'>
                            <TabList  className='settings-menu'>
                                <Tab><span>Профиль</span></Tab>
                                <Tab><span>Кошельки</span></Tab>
                                <Tab><span>Смена пароля</span></Tab>
                                <Tab><span>2-факторная авторизация</span></Tab>
                            </TabList>
                            <TabPanel>
                                <div class="settings-cont">
                                <div class="setProfile">
                                    <InputBox name={'Эл.почта'}/>
                                    <InputBox name={'Аватар'} isAvatar={'true'}/>
                                    <InputBox name={'Имя'}/>
                                    <InputBox name={'Фамилия'}/>
                                    <InputBox name={'Дата рождения'} isBirth={'true'}/>
                                    <InputBox name={'Компания'}/>
                                    <InputBox name={'Код компании'}/>
                                    <InputBox name={'ИНН'}/>
                                    <InputBox name={'Адрес 1'}/>
                                    <InputBox name={'Адрес 2'}/>
                                    <InputBox name={'Город'}/>
                                    <InputBox name={'Регион'}/>
                                    <InputBox name={'Почтовый индекс'}/>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel> 2 tab</TabPanel>
                            <TabPanel> 3 tab</TabPanel>
                            <TabPanel> 4 tab</TabPanel>

                        </Tabs>

                        <div class="settings-button">

                            <a class="button button--big" href="javascript:void(0)">Сохранить</a>

                        </div>

                    </div>

                </div>

            </div>
            <div class="hFooter"></div>

            </div>
        );
    }
}