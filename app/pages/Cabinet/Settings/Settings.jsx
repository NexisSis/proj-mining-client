import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import HeaderTitle from "app/pages/Cabinet/components/Common/HeaderTitle";
import InputBox from "app/pages/Cabinet/components/Settings/InputBox";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class Settings extends React.Component {
    render() {

        return (
            <div>
                <div class={cabinetStyle["content"]}>
                    <HeaderTitle name="Настройки"/>

                    <div class={cabinetStyle["settings"]}>

                        <div class={cabinetStyle["cont"]}>

                            <Tabs selectedTabClassName={cabinetStyle["active"]}>
                                <TabList className={cabinetStyle["settings-menu"]}>
                                    <Tab><span>{"Профиль"}</span></Tab>
                                    <Tab><span>{"Кошельки"}</span></Tab>
                                    <Tab><span>{"Смена пароля"}</span></Tab>
                                    <Tab><span>{"2-факторная авторизация"}</span></Tab>
                                </TabList>
                                <TabPanel>
                                    <div class={cabinetStyle["settings-cont"]}>
                                        <div class={cabinetStyle["setProfile"]}>
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

                            <div class={cabinetStyle["settings-button"]}>

                                <a class={cabinetStyle["button"] + ' ' + cabinetStyle["button--big"]} href="javascript:void(0)">{"Сохранить"}</a>

                            </div>

                        </div>

                    </div>

                </div>
                <div class={cabinetStyle["hFooter"]}></div>

            </div>
        );
    }
}

export default Settings;