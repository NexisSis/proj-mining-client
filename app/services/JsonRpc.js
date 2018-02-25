import api from "api";
import shortid from 'shortid';

export class JsonRpc{
    constructor(props){
         this.handler = props.request;
        //this.language = props.language;
    }
    static buildUrl(){
        return  api.Host+':'+api.Port;
    }
    getId(){
        return shortid.generate();
    }
    request(method,params,id){
        return this.handler.post(
            JsonRpc.buildUrl(),
            {
                jsonrpc: "2.0",
                method: method,
                params: params,
                id: id
            }
        );
    }
}