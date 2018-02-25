import React from 'react';

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
        const domain = this.state.email.split("@").pop().pop();
        return (
            <h1 style={style}>Поздравляю! Вы успешно зарегестрировались. Проверьте <Link to={domain}>почту</Link> для подтверждения регистрации</h1>
        );
    }
}