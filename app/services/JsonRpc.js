import api from "api";
import shortid from 'shortid';

export class JsonRpc{
    constructor(props){
        this.request = props.request;
        //this.language = props.language;
    }
    buildUrl(){
        return  api.Host+':'+api.Port;
    }
    getId(){
        return shortid.generate();
    }
    request(method,params,id){
        return this.request.post(
            buildUrl(),
            {
                jsonrpc: "2.0",
                method: method,
                params: params,
                id: id
            }
        );
    }
}