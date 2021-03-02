// import createRequire from 'module';
// const require = createRequire(import.meta.url);
import  express from 'express';
import data from "./data.js";
// require('../router/signUproute.js');
// import path from 'path';
const PORT=process.env.PORT || 5000;
const app= express();

// app.use('/', express.static(path.join(__dirname,'dist')));

app.get('/api/products',(req,res)=>{
    res.send(data.Products);
})
app.get(`/ProductView/${data.Products.id}`,(req,res)=>{
    res.send(data.Products);
})
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'clientside', 'build', 'index.html'));
//   });
// app.use("/auth",router);
app.listen(PORT,()=>{
    console.log(`Server running on Port${PORT}`);
})

export default app;