const currentDate = new Date();

const day = currentDate.getDay();
const hours = currentDate.getHours();
const logger=(req,res,next)=>{
    console.log(hours)  
      if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
     next()
 }else{


     res.send("not availble now ")
 }
}
module.exports = logger