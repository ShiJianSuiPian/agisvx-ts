import amdLoader from "esri-loader";
//

amdLoader.loadModules(["esri/map"])
    .then((Map) => {
        //
        let map = new Map("div", {
            logo: false
        });
        //
        map.addLayer(null);
    })
    .catch((error) => {
        //

        console.log(error.message);
    });