const express=require("express")

const zod=require("zod")
const router=express.Router();
const jwt=require("jsonwebtoken");
const  JWT_SECRET  = require("../config");
const { User, Account } = require("../db");
const  middleware  = require("../middleware");
const userSchema=zod.object({
    fname:zod.string(),
    lname:zod.string(),
    username:zod.string().email(),
    password:zod.string()

})




router.post("/signup",async function(req,res){
    const userPayload=req.body;
   
 
    const Payload=userSchema.safeParse({
        fname:userPayload.fname,
        lname:userPayload.lname,
        username:userPayload.username,
        password:userPayload.password
    });
   
    
 
    
    
    if(!Payload.success){
        return res.status(411).json({
            message:"User already exist/invalid input"
        })
       
    }
    
    const already=await User.findOne({username:req.body.username})
    if(already){
        return res.status(411).json({
            message:"User already exists"
        })
    }
    
    const user=await User.create({
        fname:userPayload.fname,
        lname:userPayload.lname,
        username:userPayload.username,
        password:userPayload.password
        
    })
    const userId=user._id

    await Account.create({
        userId,
        balance: 1+Math.random()*10000
    })
    const token=jwt.sign({userId},JWT_SECRET)
    
        
    res.status(200).json({
        message:"User created successfully",
        token:token
    })
    
})

const signinSchema=zod.object({
    username:zod.string().email(),
    password:zod.string()
})
router.post("/signin",async function(req,res){
    const Payload=req.body;
    const Parse=signinSchema.safeParse(Payload);
    if(!Parse.success){
        res.status(411).json({
            message:"Error while creating the user"
        })
    }
    const existing=await User.findOne({
        username:Payload.username
    })
    if(existing){
        const token=jwt.sign({userId:existing._id},JWT_SECRET)
        res.json({
            userId:token
        })
        return 
    }
    res.status(411).json({
        message:"Error while sigining in"
    })
    
})

const updateBody=zod.object({
    lname:zod.string().optional(),
    fname:zod.string().optional(),
    password:zod.string().optional()
})

router.put("/",middleware,async function(req,res){
    const userId=req.userId;
    const parse=updateBody.safeParse(req.body);
    if(!parse.success){
        
        res.status(403).json({
            Error:"Error while updating"
        })
    
    }
    const update=await User.findOneAndUpdate({_id:userId},req.body)
    
    res.status(200).json({
            message:"Updates successful"
        })
   

})

router.get("/bulk",async function(req,res){
    const filter=req.query.filter || "";

    try{
       const usersFound= await User.find(
        {
            "$or":
            [
                {fname:
                    {"$regex":filter}
                },
                {lname:
                    {"$regex":filter}
                }
        ]
        }
    )
       
    res.json({
        user: usersFound.map(user => ({
            username: user.username,
            firstName: user.fname,
            lastName: user.lname,
            _id: user._id
        }))
       })
    }
    catch(err){
        res.json({user:"hello"})
    }

})



module.exports=router

