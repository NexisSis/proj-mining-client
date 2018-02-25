
import {JsonRpc} from "app/services/JsonRpc";

export class Reset extends JsonRpc {
    constructor(props) {
        super(props);
    }

    password($email) {
        return this.request("reset.password",{
            email:$email
        }, this.getId());
    }

    passwordConfirm(token,password,password_confirm) {
        return this.request("reset.password")
    }
}