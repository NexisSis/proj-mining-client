import {JsonRpc} from "./JsonRpc";

export default class Auth extends JsonRpc {
    constructor(props){
        super(props);
    }

    signin(email, password) {
        console.log(email,password,JsonRpc.buildUrl());
        return this.request("auth.signin",{
            email: email,
            password: password
        }, this.getId());
    }

    security(token,code) {
        return this.request("auth.security",{
            token: token,
            code: code,
        }, this.getId());
    }

    signout() {
        return this.request("auth.signout",{},this.getId());
    }

}