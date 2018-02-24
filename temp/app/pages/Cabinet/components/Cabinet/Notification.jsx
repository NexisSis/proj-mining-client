import React from "react";
import cabinetStyle from "app/pages/Cabinet/assets/css/cabinet.css";

class Notification extends React.Component{
    render(){
        const type = this.props.type;
        const text = this.props.text;
        if(type=='info' || type=='yellow' || type=="red" || type=='green'){
            return(
                <div class={cabinetStyle['informer'] + ' ' + cabinetStyle['informer--'+ type]}>
                    <div class={cabinetStyle["informer__button"]}></div>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            );
        }else{
            console.log('Error notification type');
            return null;
        }

    }
}

export default Notification;