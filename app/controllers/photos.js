var FB = require('fb')

module.exports = function(req) {
    FB.setAccessToken(req.user.token);

    FB.api('me/photos', {fields: 'images'}, function(res) {
        if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
    });
}
