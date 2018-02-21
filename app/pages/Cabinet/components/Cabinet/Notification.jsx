import React from "react"
class Notification extends React.Component{
    render(){
        const type = this.props.type;
        const text = this.props.text;
        if(type=='info' || type=='yellow' || type=="red" || type=='green'){
            return(
                <div class={'informer informer--'+ type}>
                    <div class="informer__button"></div>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            )
        }else{
            console.log('Error notification type');
            return null;
        }

    }
}

export {Notification};