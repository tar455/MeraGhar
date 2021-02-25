// import createRequire from 'module';
// const require = createRequire(import.meta.url);
import  express from 'express';
import data from "./data.js";
// require('../router/signUproute.js');

const PORT=process.env.PORT || 5000;
const app= express();


app.get('/api/products',(req,res)=>{
    res.send(data.Products);
})
app.use('/', express.static(path.join(__dirname, 'dist')));
// app.use("/auth",router);
app.listen(PORT,()=>{
    console.log(`Server running on Port${PORT}`);
})

export default app;