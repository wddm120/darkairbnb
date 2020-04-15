const isAdminLoggedIn = (req,res,next)=>{
  if(req.session.adminInfo)
  {
    next()
  }
  else{
    res.redirect("/admin")
  }
}

module.exports = isAdminLoggedIn;