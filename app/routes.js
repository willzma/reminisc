var photos = require('./controllers/photos');

module.exports = function(app, passport) {
    app.get('/api/getPictures', function(req, res) {
        photos(req, res, function(err, results) {
            if (err) {
                res.end("null");
            } else {
                res.writeHead(200, {"Content-Type": "application/json"});
                res.end(JSON.stringify(results));
            }
        });
    });
    app.get('/api/isLoggedIn', function(req, res) {
        res.end(String(req.hasOwnProperty("user")));
    })
    app.get('/api/auth', passport.authenticate('facebook', { scope : 'user_photos' }));
    app.get('/api/auth/callback',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/error'
        })
    );
    app.get('/api/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
