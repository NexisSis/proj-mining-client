import React from 'react';
export default class Forbidden extends React.Component{
    render(){
        var style={
            marginTop: '36px',
            textAlign: 'center',
            marginBottom: '372px'

        };
        return (
            <div>
                <h1 style={style}>Вам тут быть не следует</h1>
            </div>
        );
    }
}