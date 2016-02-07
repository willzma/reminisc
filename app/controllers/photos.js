var FB = require('fb')
var tags = require('./tags');

module.exports = function(req, res, callback) {
    FB.setAccessToken(req.user.facebook.token);

    FB.api('me/photos', {fields: ['images', 'name', 'tags']}, function(res) {
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
