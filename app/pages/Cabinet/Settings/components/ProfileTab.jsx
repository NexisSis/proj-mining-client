import React from 'react';
import InputBox from "app/pages/Cabinet/components/Settings/InputBox";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

export default class ProfileTab extends React.Component{
    render(){
        return (
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
        );
    }
}