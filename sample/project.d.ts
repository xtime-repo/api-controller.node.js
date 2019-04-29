declare module "sample-folder" {
    export interface IAction{
        /** action id */
        id: number;
        /** document for this action */
        text: string;
        externalkey: number;
    }
}