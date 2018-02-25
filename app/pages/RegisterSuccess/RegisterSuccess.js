import React from 'react';
import Link from "react-router-dom";

export default class RegisterSuccess extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email : props.email
        };
    }

    render(){
        var style={
            marginTop: '36px',
            textAlign: 'center',
            marginBottom: '372px'

        };
       // const domain = this.state.email.split("@").pop().pop();
       // <h1 style={style}>Поздравляю! Вы успешно зарегестрировались. Проверьте <Link to={domain}>почту</Link> для подтверждения регистрации</h1>

        return (
            <h1 style={style}>Поздравляю! Вы успешно зарегестрировались.</h1>

        );
    }
}