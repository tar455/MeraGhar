// import createRequire from 'module';
// const require = createRequire(import.meta.url);
import  express from 'express';
import data from "./data.js";
import path from 'path';
// import ejs from 'ejs';
// require('../router/signUproute.js');
const __dirname=path.resolve();
// import path from 'path';
const PORT=process.env.PORT || 5000;
const app= express();
// console.log(__dirname)
const Stat_path=path.join(__dirname,'./template/views');
app.use(express.static(path.join(__dirname,'./public/css')));
// app.use(express.static(Stat_path));
// app.engine('html',)
app.set('views',Stat_path);
app.set('view engine','ejs');
// app.use('/', express.static(path.join(__dirname,'dist')));
app.get('/',(req, res)=>{
    res.render('index',{list:"lists"});
})
app.get('/about',(req, res)=>{
    res.render('about');
})
app.get('/Login',(req, res)=>{
    res.render('Login');
});
app.get('/signup',(req, res)=>{
    res.render('Signup');
})
app.get('/api/products',(req,res)=>{
    res.send(data.Products);
})
app.get(`/ProductView/${data.Products.id}`,(req,res)=>{
    res.send(data.Products);
})
app.get('*', (req, res) => {
    res.send("404");
  });
// app.use("/auth",router);

app.listen(PORT,()=>{
    console.log(`Server running on Port${PORT}`);
})

export default app;