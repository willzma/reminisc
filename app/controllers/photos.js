var FB = require('fb')
var tags = require('./tags');

module.exports = function(req) {
    FB.setAccessToken(req.user.token);

    FB.api('me/photos', {fields: 'images'}, function(res) {
        if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        return res.data.map(function(img) {return img.images[0].source});
    });
}
