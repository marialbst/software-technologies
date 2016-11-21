const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = (app, config) => {
    //view engine setup
    app.set('views', path.join(config.rootFolder, '/views'));
    app.set('view engine', 'hbs');

    //this sets up which is the parser for the request's data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    //we will use cookies
    app.use(cookieParser());

    //session is storage for cookies, which will be de/encrypted with that 'secret key'
    app.use(session({secret: 's3cr3t5tr1ng', resave: false, saveUninitialized: false}));

    //for user validation we will use passport module
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
        if(req.user){
            res.locals.user = req.user;
            req.user.isInRole('Admin').then(isAdmin => {
                res.locals.isAdmin = isAdmin;
                next();
            })

        }else{
            next();
        }
    });

    //this makes the content in the public folder accessible for very user
    app.use(express.static(path.join(config.rootFolder, 'public')));
};
