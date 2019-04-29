import { UrlParser } from "../../lib/mvc-url-parser";
 import { IControllerIndex } from "../Lib/IController";
import { ProcessPost } from "../../lib/postprocessor";
import { IncomingMessage, ServerResponse } from "http";
import { Result } from "../Lib/Result";
import { actionController } from "../class/actions.controller";
 

export class ApiRouter {
    req: IncomingMessage;
    res: ServerResponse;


    constructor(req: IncomingMessage, res: ServerResponse) {
        this.req = req;
        this.res = res;
    }


    async route(urltext: string): Promise<any> {

        //! Register Your Action List
        var constructors: IControllerIndex = {
            "action": actionController,
        };


        var mvc = new UrlParser(urltext, this.req.method);


        if (constructors[mvc.Controller]) {
            let ctr = new constructors[mvc.Controller]

            if (ctr[mvc.Action]) {
                if (mvc.IsPostMethod) {
                    var posteddata = await ProcessPost(this.req);
                    ctr[mvc.Action](posteddata);
                    new Result(this.res).sendText("OK");
                    return;
                }
                if (mvc.IsGetMethod) {
                    var c = ctr[mvc.Action](mvc.id);
                    new Result(this.res).sendText(c);
                    return;
                }
            }
        }


        new Result(this.res).NotFound();

    }

}