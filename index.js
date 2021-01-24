const express = require('express')
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(BodyParser.json());
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

app.get('/' ,(req,res) => {
    res.send('we are at home');
})

mongoose.connect('mongodb://localhost/rest',{ useNewUrlParser: true },() => {
    console.log('connected to DB');
})


app.listen(3000);