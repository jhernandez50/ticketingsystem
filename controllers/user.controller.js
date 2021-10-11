const db=require('../models');
const User=db.User;
const {getUserType}=require('../utils/auth');
const register=(req,res)=>{
    const {firstName,lastName,email,password,user}=req.body;
    console.log(req.body);
    const userType=getUserType(user);
    console.log(firstName)
    User.create({
        firstname:firstName,
        lastname:lastName,
        email:email,
        password:password,
        user_type:userType
    })
    .then(dbData=>{
        res.status(200).send({message:"You are registered successfully!"})
    })
    .catch(err=>{
        res.status(500).send({message:"Internal Error"})
    })
}
const login=(req,res)=>{
    User.findOne({
        where: {
          email: req.body.email
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that email address!' });
          return;
        }
    
        const validPassword = dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        }
        console.log(dbUserData)
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.firstname;
          req.session.loggedIn = true;
          req.session.userType=dbUserData.user_type;
          // declare session variables
        res.status(200).send(dbUserData);
     })
     .catch(err=>{
      res.status(500).send({message:"Internal Error"})
  });
}
const logout=(req,res)=>{
  if (req.session.loggedIn) {
   delete req.session.user_id;
   delete req.session.username;
   delete req.session.loggedIn;
   delete req.session.userType;
  res.status(200).send({message:"You are successfully logged out."})
  }
  else {
    res.status(404).end();
  }
}
module.exports={
    register,
    login,
    logout
}