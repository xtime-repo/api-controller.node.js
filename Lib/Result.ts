import { ServerResponse } from "http";

export class Result {

    res: ServerResponse

    constructor(res: ServerResponse) {
        this.res = res;
    }


    sendText(arg: string | object): any {

        if (typeof arg != "string") {
            arg = JSON.stringify(arg);
        }

        this.res.setHeader("Access-Control-Allow-Origin", "*")
        this.res.writeHead(200, { 'Content-Type': "text/plain" });
        this.res.end(arg);

        return;
    }

    NotFound(): any {
 

        this.res.setHeader("Access-Control-Allow-Origin", "*")
        this.res.writeHead(404, { 'Content-Type': "text/plain" });
        this.res.end("404 Not Found");

        return;
    }

}