"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var config_1 = require("./config");
var app = express();
passport.use(new GoogleStrategy({
    clientID: config_1.config.googleClientID,
    clientSecret: config_1.config.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, function (accessToken, refreshToken, profile, done) {
    console.log('Access Token ' + accessToken);
    console.log('Refresh Token ' + accessToken);
    console.log('Profile ', profile);
}));
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
app.get('/auth/google/callback', passport.authenticate('google'));
app.listen(config_1.config.PORT, function () {
    console.log("server is listening at port " + config_1.config.PORT);
});
