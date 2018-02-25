import React from 'react';
import {connect} from 'react-redux';
import {confirm} from "app/store/actions/user/register";
import qs from 'qs';
 class RegisterSucces extends React.Component{
     constructor(props){
         super(props);
         this.state ={
             isError:true,
             message:""
     };
     }
     componentWillMount(){
         var decodeToken = this.parseToken(this.props.location.search);
         if(decodeToken != undefined){
             confirm(decodeToken)().then(response=>{
                 if(response.data.error != undefined){
                     if(response.data.error.message != undefined){
                         this.setState({message:response.data.error.message});
                     }
                 }
                 else if (response.data.result != undefined) {
                     this.setState({isError: false});
                 } else {
                     this.setState({isError: true});
                 }
             });
         }else{
             this.setState({isError:true, message:"Серверная ошибка"});
         }
     }
     parseToken(decodeToken){
         decodeToken = decodeURIComponent(decodeURIComponent(this.props.location.search));
         decodeToken = decodeToken.slice(1);
         return qs.parse(decodeToken).token;
     }

    render(){
        var style={
            marginTop: '36px',
            textAlign: 'center',
            marginBottom: '372px'

        };
        return (
            <h1 style={style}>{this.state.isError? this.state.message : 'Поздравляю! Вы успешно зарегестрировались.' }</h1>
        );
    }
}
export default connect(null,{confirm})(RegisterSucces);