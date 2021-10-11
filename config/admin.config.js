const db=require('../models');
const User=db.User;
module.exports={
    addAdmin:()=>
    {
    User.findOne({
    where: {
            email: process.env.ADMIN_EMAIL
    }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            User.create({
                firstname:"secret",
                lastname:"admin",
                email:process.env.ADMIN_EMAIL,
                password:process.env.ADMIN_PW,
                user_type:"Admin"
            })
            .then(dbData=>{
                console.log("admin is set!");
            })
            .catch(err=>{
                throw err;
            })
        }
        else{
            console.log("admin is already existed!")
        }
    })
    .catch(err=>{
        throw err;
    })
   
    }
    
}