import  express from 'express';
import data from "./data.js";
import path from 'path';
import mongo from "./setUp/mongodbSet.js";
const __dirname=path.resolve();
const PORT=process.env.PORT || 5000;
const app= express();
const Stat_path=path.join(__dirname,'./template/views');
app.use(express.static(path.join(__dirname,'./public/css')));
app.set('views',Stat_path);
app.set('view engine','ejs');
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
app.get(`/ProductView:${data.Products.id}`,(req,res)=>{
    res.send(data.Products);
})
app.get('/start',(req,res)=>{
    res.send("Start");
})
app.get('/addProduct',(req,res)=>{
    res.render('addProduct');
})
app.get('*', (req, res) => {
    res.send("404");
  });
app.listen(PORT,()=>{
    console.log(`Server running on Port${PORT}`);
})

export default app;