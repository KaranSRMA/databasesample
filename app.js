const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/Employee')

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase');
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/data', async (req, res) => {
    // Create and save the new user
    const newuser = await User.create({
        name: "User",
        age: 20,
        email: "test@email.com"
    });
    console.log(newuser.name);
    res.send("Succesfull")
});

app.listen(port, () => {
    console.log('Server running on port' + "127.0.0.1:3000");
});
