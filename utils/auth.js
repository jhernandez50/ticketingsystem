const withAuth = (req, res, next) => {
    //If user is not logged in redirect the user to login page
    if (!req.session.loggedIn) {
      res.render('login',{message:"Please login first to proceed"});
    } else {
      next();
    }
  };
const checkEmail=(req,res,next)=>{
  
}
  const getUserType=(user)=>{
      if(user=='IT-member') return "Member";
      if(user=='customer') return "Customer";
      else return "Admin"
  }

  
  module.exports = {withAuth,getUserType};