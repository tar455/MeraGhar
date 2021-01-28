const mongoose=require('mongoose');

const url='mongodb://localhost:27017/MeraGhar';


mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(error)=>{
    if(!error){
        console.log("Mongodb server Running");
    }
    else{
        console.log("Error:",error);
    }
})