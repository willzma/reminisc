module.exports = {
    'facebookAuth' : {
        'clientID': process.env.FACEBOOK_CLIENT_ID,
        'clientSecret': process.env.FACEBOOK_SECRET,
        'callbackURL': 'http://localhost/api/auth/callback'
    }
};
