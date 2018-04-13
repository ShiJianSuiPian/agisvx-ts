import FeatureLayer = require("esri/layers/FeatureLayer");
import Map = require("esri/map");

class QueryLayer {
    //

    constructor(name: string, options?: any) {
        //

    }

    //
    say() {
        //
        console.log("test");
        //
        var layer = new FeatureLayer("");
        //
        var map = new Map("id", {
            //
            logo: false
        })
    }

}

//
export = QueryLayer;