import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import HeaderTitle from "app/pages/Cabinet/components/Common/HeaderTitle";
import InputBox from "app/pages/Cabinet/components/Settings/InputBox";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";
import ProfileTab from "./components/ProfileTab";
import AuthTab from "./components/AuthTab";
import ChangePassTab from "./components/ChangePassTab";
import WalletsTab from "./components/WalletsTab";
class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            name: '',
            surname: '',
            birthday: '',
            company: '',
            companyCode: '',
            inn: '',
            address: '',
            address2: '',
            city: '',
            region: '',
            postIndex: '',
            errors: {},
            isCorrectLoading: true,
            isRedirect: false,
            serverError: "",
        };
    }
    render() {

        return (
            <div>
                <div className={cabinetStyle["content"]}>
                    <HeaderTitle name="Настройки"/>

                    <div className={cabinetStyle["settings"]}>

                        <div className={cabinetStyle["cont"]}>

                            <Tabs selectedTabClassName={cabinetStyle["active"]}>
                                <TabList className={cabinetStyle["settings-menu"]}>
                                    <Tab><span>{"Профиль"}</span></Tab>
                                    <Tab><span>{"Кошельки"}</span></Tab>
                                    <Tab><span>{"Смена пароля"}</span></Tab>
                                    <Tab><span>{"2-факторная авторизация"}</span></Tab>
                                </TabList>
                                <TabPanel>
                                    <ProfileTab />
                                </TabPanel>
                                <TabPanel>
                                    <WalletsTab />
                                </TabPanel>
                                <TabPanel>
                                    <ChangePassTab />
                                </TabPanel>
                                <TabPanel>
                                    <AuthTab />
                                </TabPanel>

                            </Tabs>

                            <div className={cabinetStyle["settings-button"]}>

                                <a className={cabinetStyle["button"] + ' ' + cabinetStyle["button--big"]} href="javascript:void(0)">{"Сохранить"}</a>

                            </div>

                        </div>

                    </div>

                </div>
                <div className={cabinetStyle["hFooter"]}></div>

            </div>
        );
    }
}

export default Settings;