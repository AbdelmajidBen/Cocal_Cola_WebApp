const { default: mongoose } = require("mongoose")

const dbConnect= ()=>{
    try{
        const conn= mongoose.connect(process.env.MONGODB_URL)
        console.log("Datbase Connected Succefully ");
}
catch (error){
   console.log("Database Error");
}
};
module.exports=dbConnect;