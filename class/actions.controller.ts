import { IController } from "../Lib/IController";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { IAction } from "sample-folder";
 




let localActionPath: string = "../data/local/action.json";

export class actionController extends IController {

    index(id:string) {



        var actionlist: IAction[] = [];
        if (existsSync(localActionPath))actionlist = JSON.parse(readFileSync(localActionPath).toString());
 
        //  gameactions[0].actions.push({ subject: "checking", text: "game checked", state: 6 })
        return actionlist;
    }


    get(id:number) {



        var actionlist: IAction[] = [];
        if (existsSync(localActionPath))actionlist = JSON.parse(readFileSync(localActionPath).toString());
 
        //  gameactions[0].actions.push({ subject: "checking", text: "game checked", state: 6 })
        return actionlist.filter(c=>c.externalkey == id);
    }


    edit(data: IAction) {

      

        var actionlist: IAction[] = [];
        if (existsSync(localActionPath))actionlist = JSON.parse(readFileSync(localActionPath).toString());

        if (data.id < 0) {
            data.id = 1;
            if (actionlist.length > 0) data.id += actionlist[actionlist.length - 1].id;
            actionlist.push(data);
        }

        writeFileSync(localActionPath, JSON.stringify(actionlist));

    }

}