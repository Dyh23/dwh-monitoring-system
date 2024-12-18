const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const fs = require('fs');
const AdmZip = require('adm-zip');
const path = require('path');
require('dotenv').config();
require('./config/auth');

const app = express();
const port = 5000;

app.use(cors()); // Use the cors middleware
app.use(session({ secret: 'REMOVED_SECRET2', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Authentication routes
app.get('/auth', passport.authenticate('azure_ad', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
});

app.post('/auth/callback', passport.authenticate('azure_ad', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// API route for fetching data
app.get('/api/data', (req, res) => {
    const data = [
        { label: 'January', value: 30 },
        { label: 'February', value: 20 },
        { label: 'March', value: 50 }
    ];
    res.json(data);
});

// Route for zipping files
app.get('/zip-files', (req, res) => {
    const zip = new AdmZip();
    const outputFilePath = path.join(__dirname, 'output.zip');

    zip.addLocalFolder(path.join(__dirname, 'files'));
    zip.writeZip(outputFilePath);

    res.download(outputFilePath, 'output.zip', (err) => {
        if (err) {
            res.status(500).send('Error downloading file');
        } else {
            fs.unlinkSync(outputFilePath);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
