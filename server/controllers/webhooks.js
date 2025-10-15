import { Webhook} from 'svix';
import {User} from "../models/User.js"

//Api controller Function to mange clerk user with database
const clerkWebhooks=async(req,res)=>{
    try{
//CREATE S SVIX INSnew whookTANCE WITH CLERK WEBHOOK SCECREAT
const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)
//verifying headers 
await whook.verify(JSON.stringify(req.body),{
    "svix-id":req.headers["svix-id"],
    "svix-timestamp":req.headers["svix-signature"]
})

//getting data from request body
const {data,type}=req.body

//switch cases for different events
switch(type){
    case 'user-created':{
const userData={
    _id:data.id,
    email:data.email_address[0].email_address,
    name:data.first_name +" "+data.last_name,
    image:data.imgae_url,
    resume:''


}
await User.create(userData)
res.json({})
break;

    }
    case 'user-updated':{
     const userData={
   
    email:data.email_address[0].email_address,
    name:data.first_name +" "+data.last_name,
    image:data.imgae_url,
   


}
await User.findByIdAndUpdate(data.id,userData)
res.json({})


    }
    case 'user-deleted':{
    await User.findByIdAndDelete(data.id)
    res.json({})
    break;
    }
    default:
       
}

    }catch(error){
console.log(error.mesage);
res.json({sucess:false,mesage:'webhookd Error'})
    }
}