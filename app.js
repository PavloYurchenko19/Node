const express = require('express');
const {engine} = require('express-handlebars');

const app = express();
const path = require('path');

const users =[
    {firstName:'Pavlo',lastName:'Yurchenko',age:19,email:'yurchenkopavlo@gmail.com',city:'Lviv'},
    {firstName:'Andriy',lastName:'Zelenskuy',age:19,email:'andriy@gmail.com',city:'Lviv'},
    {firstName:'Vasya',lastName:'Kokosov',age:19,email:'vasya@gmail.com',city:'Lviv'},
    {firstName:'Sasha',lastName:'Yurchenko',age:19,email:'sasha@gmail.com',city:'Lviv'},
    {firstName:'Masha',lastName:'Zelenskuy',age:19,email:'masha@gmail.com',city:'Lviv'},
    {firstName:'Vasya',lastName:'Lipovuy',age:19,email:'vasyalipovuy@gmail.com@gmail.com',city:'Lviv'},
    {firstName:'Pavlo',lastName:'Syrota',age:19,email:'pavlosyrota@gmail.com',city:'Lviv'},
    {firstName:'Andriy',lastName:'Hnidets',age:19,email:'andriyhnidets@gmail.com',city:'Lviv'},
    {firstName:'Masha',lastName:'Mazepa',age:19,email:'mashamazepa@gmail.com',city:'Lviv'},
    {firstName:'Rick',lastName:'Kokosov',age:19,email:'rick@gmail.com',city:'Lviv'},
]


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


app.get('/users', (req, res) => {
    const {name, age, city} = req.query;

    if (name && age || city){

    }

    res.render('users', {users});
});
app.get('/login', (req, res) => {

    res.render('login');
});
app.post('/login', (req, res) => {
   let userEmail = users.filter(user=>user.email === req.body.email)
    if (userEmail.length > 0 ){
        res.redirect('/emailExist');
     return
    }
    users.push(req.body);
    res.redirect('/users');
});

app.get('/emailExist', (req, res) => {
    res.render('email');
});

app.listen(4100);
