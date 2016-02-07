var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    facebook: {
        id: String,
        token: String
    },
    last_accessed: {type: Date, default: new Date(2004, 2, 4)},
    last_request: mongoose.Schema.Types.Mixed
});

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.methods.hashPassword = function(password) {
    var user = this;
    bcrypt.hash(password, null, null, function(err, hash) {
        if (err)
            return next(err);
        user.local.password = hash;
    });

};

module.exports = mongoose.model('User', userSchema);
