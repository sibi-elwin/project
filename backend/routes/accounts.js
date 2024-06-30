const express=require("express");
const  middleware  = require("../middleware");
const { Account, User } = require("../db");
const mongoose=require("mongoose")

const router=express.Router();


router.get("/balance",middleware,async function(req,res){
    const users=await Account.findOne({userId:req.userId});
    console.log(users)

    if(users){
        return res.json({
            userId: req.userId,
            balance: users.balance 
        })
        
    }
    res.json({
        message:"User do not exists"
    })
    

})

router.post("/transfer",middleware,async function(req,res){

    const fromUserId=req.userId;
    const {to,amount}=req.body;
    const fromAccount=await Account.findOne({userId:fromUserId})
    const toAccount=await Account.findOne({userId:to})
    if(!toAccount){
        res.status(411).json({
            message:"User not found"
        })
    }
    const session =await mongoose.startSession()
    session.startTransaction();
    if(!fromAccount || fromAccount.balance<amount){
        session.abortTransaction();
        return res.json({
            message:"Transaction aborted: Insufficient Balance "
        })
    }
    
    await Account.updateOne({userId:fromUserId},{"$inc":{balance:-amount}});
    await Account.updateOne({userId:to},{"$inc":{balance:amount}});
await session.commitTransaction();
session.endSession();
res.status(200).json({
    success:"Transaction Successful"
})

})



module.exports=router

