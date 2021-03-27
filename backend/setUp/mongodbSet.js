import mongoose from 'mongoose';
const url="mongodb://localhost:27017/GreenWeather";
const mongo=mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
},err=>{
    if(!err){
        console.log("connect successfully");
    }
    else{
        console.log("Error",err);
    }
});

export default mongo;