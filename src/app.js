const express=require('express');
const hbs=require('hbs');
const path=require('path');
const app=express();

// const stapath=path.join(__dirname,'../templates');

app.use('/css',express.static(path.join(__dirname,'../public/css')));
app.use('/images',express.static(path.join(__dirname,'../images')))
// app.use('/css',express.static(path.join(__dirname+'../public/css')))
// app.use(express.static(stapath));
const template_stat=path.join(__dirname,'../templates/views');
const partial_path=path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',template_stat);

hbs.registerPartials(partial_path);
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/index',(req,res)=>{
    res.render('index');
})
app.get('/login-signup',(req,res)=>{
    res.render('login-signup');
})
app.get('*',(req,res)=>{
    res.send('<h1 align="center">404 Error</h1>');
});
app.listen(8080,()=>{
    console.log('Server is Running Go ON!!!!');
});