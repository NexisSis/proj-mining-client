import {JsonRpc} from "./JsonRpc";

export default class Register extends JsonRpc {
    constructor(props){
        super(props);
    }

    signup(email,password,passwordConfirm,country) {
        console.log(email,password,passwordConfirm,country,this.buildUrl());
        return this.request("register.signup",{
            email: email,
            password: password,
            password_confirmation:passwordConfirm,
            country : country,
        },this.getId());
    }

}