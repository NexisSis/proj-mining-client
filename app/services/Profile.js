import {JsonRpc} from "./JsonRpc";

export default class Profile extends JsonRpc {
    constructor(props) {
        super(props);
    }

    getAll() {
        return this.request("profile.all",{},this.getId());
    }

    get(key) {
        return this.request("profile.get",{
            name: key
        }, this.getId());
    }

    set(key,value) {
        return this.request("profile.set",{
            name:key,
            value: value
        },this.getId());
    }
}