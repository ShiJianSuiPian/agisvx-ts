// import {TT, say} from "en";

class User {
    //

    options: any;

    // tt: TT;

    constructor(options?: any) {
        //

        if (options) {
            //
            this.options = options;
        }

        //
        // this.tt = new TT();

        // this.tt.skipToMapView("wangsl");

        // say("kao");
        console.log("tsts");
    }

    //
    showInfo(msg): void {
        //
        console.log("hello.  " + msg);
    }

}

let btnTest = document.getElementById("btn-test");
//
if (btnTest) {
    //
    btnTest.onclick = function () {
        //
        let user = new User();
        //
        user.showInfo("kaop");
    };
}

export = User;