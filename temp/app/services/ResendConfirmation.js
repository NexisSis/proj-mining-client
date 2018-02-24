import {JsonRpc} from "./JsonRpc";

export class ResendConfirmation extends JsonRpc {
    constructor(props){
        super(props);
    }

    signup(email) {
        return this.request("register.resend-confirmation",{
            email: email
        },this.getId());
    }
}