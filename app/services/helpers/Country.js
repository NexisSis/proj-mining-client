
import {JsonRpc} from "app/services/JsonRpc";

class Country extends JsonRpc {
    constructor(app) {
        super(app);
    }

    list() {
        return this.request("data.counties",{},this.getId());
    }
}