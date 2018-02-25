import {JsonRpc} from "./JsonRpc";

export default class Settings extends JsonRpc {
    constructor(props){
        super(props);
    }

    getAll() {
        return this.request("settings.all",{}, this.getId());
    }

    get(key){
        return this.request("settings.get",{
            name: key
        }, this.getId());
    }

    set(key,value) {
        return this.request("settings.set",{
            name: key,
            value: value
        },this.getId());
    }

}