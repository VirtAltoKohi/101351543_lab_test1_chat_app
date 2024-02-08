const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/chat',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    const { username, password, firstname, lastname } = req.body;
    // Hash password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        const newUser = new User({
            username,
            firstname,
            lastname,
            password: hash,
        });
        newUser.save((err) => {
            if (err) throw err;
            res.redirect('/login');
        });
    });
});

router.get('/chat', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('chat');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;