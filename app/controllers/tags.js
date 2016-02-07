var Clarifai = require('../../3rd/clarifai_node');
var config = require('../../config/clarifai');
Clarifai.initAPI(config.CLIENT_ID, config.SECRET);
Clarifai.setThrottleHandler( function( bThrottled, waitSeconds ) {
    console.log( bThrottled ? "[Clarifai] Throttled: service available again in " + waitSeconds + " seconds" : "[Clarifai] Not throttled");
});

module.exports = function(images, callback) {
    var urls = images.map(function(i) {return i.url});
    Clarifai.tagURL(urls, null, function (err, res) {
        if (!res || res.status_code !== "OK") {
            console.log(res ? res.status_msg : "empty response");
            callback(true, null);
        } else {
            callback(false, res.results.map(function (r, i) {
                r.result.tag.classes.filter(function (p, j) { return r.result.tag.probs[j] > 0.94});
                images[i].tags = r.result.tag.classes;
                return images[i]
            }));
        }
    });
    Clarifai.clearThrottleHandler();
}
