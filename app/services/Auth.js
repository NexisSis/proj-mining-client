import {JsonRpc} from "./JsonRpc";

export default class Auth extends JsonRpc {
    constructor(props){
        super(props);
    }

    auth(email,password) {
        console.log(email,password,this.buildUrl());
        return this.request("auth.signin",{
            email: email,
            password: password
        },this.getId());
    }

}