
import {JsonRpc} from "app/services/JsonRpc";

export class Country extends JsonRpc {
    constructor(app) {
        super(app);
    }

    list() {
        return this.request("data.countries",{},this.getId());
    }
}