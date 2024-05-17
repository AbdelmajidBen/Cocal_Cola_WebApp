const mongoose = require("mongoose"); // Erase if already required

const bcrypt= require('bcrypt');
const crypto=require('crypto');
const { ObjectId } = require("bson");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        
        
    },
    lastname:{
        type:String,
        required:true,
        
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    },
    isBlocked:{
type: Boolean,
default: false,
    },
    cart: {
        type: Array,
        default: [],
    },
    address:
    {type:String,
    },
    wishlist:[{type: mongoose.Schema.Types.ObjectId,ref: "Product"}],
    refreshToken:{
        type:String,
    },
    passwordchangedAt:Date,
    passwordResetToken: String,
    passwordResetExpires:Date,
},
{
    timestamps: true,
}
);

userSchema.pre("Save", async function(next){
   if(!this.isModified('password')){
    next();
   }
    const salt = await bcrypt.genSaltSync(10);
    this.password= await bcrypt.hash(this.password, salt);
    next()
});



userSchema.methods.createPasswordResetToken=async function(){
    const resettoken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken=crypto.createHash('sha256').update(resettoken).digest("hex");
    this.passwordResetExpires=Date.now()+3600000;//10minutes
    return resettoken;
}

//Export the model
module.exports = mongoose.model("User", userSchema);