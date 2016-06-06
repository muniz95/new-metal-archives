var passport = require("passport");
var GithubStrategy = require("passport-github").Strategy;
var mongoose = require("mongoose");

module.exports = function(){
    var User = mongoose.model('User');
    
    passport.use(new GithubStrategy({
        clientID: 'c6cbdbd350411c145f13',
        clientSecret: '34282a8c9d073c2e3d07ae01aebf125dea7db6e4',
        callbackURL: 'https://nma-muniz95.c9users.io/auth/github/callback'
    },
    function(accessToken, refreshToken, profile, done){
        User.findOrCreate(
            {'login': profile.username},
            {'name': profile.username},
            function(err, user){
                if(err){
                    console.error(err);
                    return done(err);
                }
                return done(null, user);
            }
        );
    }));
    
    passport.serializeUser(function(user, done){
        done(null, user._id);
    });
    
    passport.deserializeUser(function(id, done){
        User.findById(id).exec()
        .then(function(user){
            done(null, user);
        });
    });
}