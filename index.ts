import * as express from 'express';
import { Request, Response } from 'express';
import * as passport from 'passport';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

import { config } from './config';

const app = express();

passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken: any, refreshToken: any, profile: any, done: any) => {
    console.log('Access Token ' + accessToken);
    console.log('Refresh Token ' + accessToken);
    console.log('Profile ', profile);
}));

app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(config.PORT, () => {
    console.log(`server is listening at port ${config.PORT}`);
});