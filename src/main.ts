class User {

    //
    name:string="wang";
    constructor(name: string, age: number) {
        //

    }

    /**
     * @description show info
     * @param {String} msg  info of output.
     * */
    public showInfo(msg: string): void {
        //
        console.log(msg);
    }
    //
    public setName(name):void{
        //
        //
        this.name=name;
    }
}