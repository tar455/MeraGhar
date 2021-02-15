import express from 'express';
import data from './data.js';
// const app = express();
import '../cofigFile/cofigDB.js';
const app=express();

const PORT=process.env.PORT || 5000;

app.get('/api/products',(req,res)=>{
    res.send(data.Products);
});

app.get('/',(req,res)=>{
    res.send("server is ready");
});
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('clientside/build'));
}
app.listen(PORT,(req,res)=>{
    console.log(`Server running at localhost:${PORT}`);
});