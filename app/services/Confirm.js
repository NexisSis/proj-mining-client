import {JsonRpc} from "./JsonRpc";

export class Confirm extends JsonRpc {
    constructor(props){
        super(props);
    }

    confirm(token) {
        return this.request("register.confirm",{
            token:token
        },this.getId());
    }
}