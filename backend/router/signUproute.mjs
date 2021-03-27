import createRequire from 'module';
// import app from '../backend/server.js';
const require = createRequire(import.meta.url);
const express=require('express');
const mongoose=require('mongoose');
require('../model/Usermodel.js');

const User = mongoose.model('User');

const router =express.Router();
router.get('/Login', (req, res) => {

})
router.post('/HomeForDealer',(req,res)=>{
    
})
router.post('/User/signup')
{

}
router.get('/signup', expressAsyncHandler(async(req, res)=>{
    res.render('/signup');
}))
router.post('/signup', (req, res)=>{
    UserData=new User();
    UserData.Username=req.body.name;
    UserData.email=req.body.email;
    UserData.password=req.body.password;
    UserData.confirm_Password=req.body.confirm_password;
    if(UserData.save())
    {
        console.log("save SuccessFully");
        res.redirect('/');
    }
})

export default router;