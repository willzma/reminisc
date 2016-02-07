var FB = require('fb')
var tags = require('./tags');

module.exports = function(req, res, callback) {

    FB.setAccessToken(req.body.token ? req.body.token : req.user.facebook.token);

    FB.api('me/photos', {fields: ['images', 'name', 'tags'], limit: 25}, function(res) {
        if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        tags(res.data.map(function(img) {
            return {url: img.images[0].source,
                    caption: img.name,
                    name_tags: img.tags.data.map(function(t) {return t.name})};
        }), callback);
    });
}
