import {say, User} from "./user";

import "../css/main.css"

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