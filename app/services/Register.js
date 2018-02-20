import {JsonRpc} from "./JsonRpc";

export class Register extends JsonRpc {
    constructor(props){
        super(props);
    }

    signup(email,password,passwordConfirm,country) {
        return this.request("register.signup",{
            email: email,
            password: password,
            passwordConfirmation:passwordConfirm,
            country : country,
        },this.getId());
    }
}