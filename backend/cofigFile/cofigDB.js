import mongodb  from 'mongodb';

const url="mongodb://localhost:27017/GreenWeather";


mongodb.connect(process.env.MONGODB_URI ||url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>
{
    if(!err)
    {
        console.log("successfully connected");
    }
    else{
        console.log(err);
    }
})