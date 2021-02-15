import express from 'express';
import data from './data.js';
// const app = express();
import '../cofigFile/cofigDB.js';
const app=express();

app.get('/api/products',(req,res)=>{
    res.send(data.Products);
});

app.get('/',(req,res)=>{
    res.send("server is ready");
});
app.listen(5000,(req,res)=>{
    console.log("Server running at localhost:5000");
});