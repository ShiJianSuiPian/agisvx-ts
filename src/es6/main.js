import {say, User} from "./user";

// import sassStyle from "../sass/test.scss";
var sassStyle = require("../sass/test.scss");
var style = require("../less/main.less");

// import style from "../less/main.less";

export class MainView {
    //
    constructor(user) {
        //

        say("enen");
    }

    //
    setUser(user) {
        //
        this.user = user;
    }

    //
    say() {
        //
        // this.user.woKao();
        this.user = new User("wangsl");
        //
        this.user.woKao();
    }

    //
}

//

let mainView = new MainView();
//
mainView.say();