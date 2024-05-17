const Product = require('../models/productModel');
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const couldinaryUploadIMg= require('../utils/cloudinary')
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
const validateMongodbId=require('../utils/validateMongodbId')
const fs = require('fs')
const createProduct = asyncHandler(async(req,res)=>{

    try{
        if(req.body.title){
            req.body.slug=slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
            res.json(newProduct);
    }
    catch(error)
    {
    throw new Error(error)
}
});

//update
const updateProduct= asyncHandler(async(req,res)=>{

    const id= req.Product;
    try{
            if(req.body.title){
                req.body.slug = slugify(req.body.title)
              
            }
            const updateProduct=await Product.findOneAndUpdate({id},
                {
                    title:req?.body?.title,
                   slug : slugify(req.body.title),
                   description:req?.body?.description,
                   price:req?.body?.price,
                   category:req?.body?.category,
                   sold:req?.body?.sold,
                   quantity:req?.body?.quantity,

                },
                {
                new: true,
            });
            
            res.json(updateProduct);
    }
    catch(error){
        throw new Error(error);
    }
});



const deleteProduct= asyncHandler(async(req,res)=>{

    const {id}= req.params;
    try{
           
            const deleteProduct=await Product.findByIdAndDelete(id);
            
            res.json(deleteProduct);
    }
    catch(error){
        throw new Error(error);
    }
})



const getaProduct = asyncHandler(async(req,res)=>{

    const {id} = req.params;
    try{



            const findProduct= await Product.findById(id);
            res.json(findProduct);
    }
    catch(error){
        throw new Error (error)
    }
});

const getAllProduct = asyncHandler(async(req,res)=>{
  
    
    try{
        

        //filtering
        const queryObj={...req.query};
        const excludeFields=['page','sort','limit','fields'];

        excludeFields.forEach((el)=>delete queryObj[el]);
        console.log(queryObj);
        let queryStr=JSON.stringify(queryObj);
        queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) =>`$${match}`);
        let query=Product.find(JSON.parse(queryStr));

        //sorting

        if(req.query.sort)
        {
                const sortBy=req.query.sort.split(",").join(" ");
                query=query.sort(sortBy)
        }else{
                query=query.sort('-createdAt')
        }
        //limiting the fields
        if(req.query.fields)
        {
                const fields= req.query.fields.split(",").join(" ");
                query=query.select(fields);
        }else{
                query=query.select('-__v')
        }

        //pagination

        const page=req.query.page;
        const limit=req.query.limit;
        const skip=(page - 1)* limit;
       query=query.skip(skip).limit(limit);
       if(req.query.page){
        const ProductCount = await Product.countDocuments();
        if(skip>= ProductCount) throw new Error("This page does not exist");
       }
       console.log(page,limit,skip); 

        const product=await query;
                res.json(product);
    }catch (error){
        throw new Error(error);
    }
});

const addToWishlist= asyncHandler(async(req,res)=>{
    const {_id}= req.user;
    const {prodId}= req.body;
    try{
        const user = await User.findById(_id);
        const alreadyadded=user.wishlist.find((id)=>id.toString()===prodId);
        if(alreadyadded){
                let user = await User.findByIdAndUpdate(_id,{
                    $pull:{wishlist: prodId},
                },
                {new:true});
                res.json(user);
        }else{
                let user = await User.findByIdAndUpdate(_id,{
                    $push:{wishlist: prodId},
                },
                {new:true});
                res.json(user);
        }
    }catch(error)
    {throw new Error(error)}

});

const rating = asyncHandler(async(req,res)=>{

    const { _id }=req.user;
    const {star,prodId,comment}= req.body;
    try{
        const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find((userId)=>userId.postedby.toString()===_id.toString());
    if(alreadyRated){
        const updateRating = await Product.updateOne({
            ratings:{$elemMatch: alreadyRated},
        },
        {
            $set:{"ratings.$.star":star, "ratings.$.comment":comment},
        },
        {
            new:true,
        }
        );
        
    }else {
        const rateProduct = await Product.findByIdAndUpdate(prodId,{
            $push:{ratings:{star:star,
                comment:comment,
            postedby:_id,},}
        },
        {
            new:true,
        });
        
        }
        const getallratings = await Product.findById(prodId);

        let totalRating= getallratings.ratings.length;

        let ratingsum= getallratings.ratings.map((item)=>item.star).reduce((prev,curr)=>prev+curr,0);

        let actualRatings= Math.round(ratingsum / totalRating);

        let finalproduct =await Product.findByIdAndUpdate(
            prodId,
            {
            totalratings:actualRatings,
        }
        ,{
            new:true
        });

        res.json(finalproduct)

    }catch(error){
        throw new Error (error);
    }
    

})



const uploadImages=asyncHandler(async(req,res)=>{
    const {id }=req.params;
    validateMongodbId(id);
    try{
            const uploader= (path)=>couldinaryUploadIMg(path,'images');
            const urls=[];
            const files = req.files;
            for(const file of files){
                const {path}=file;
                const newpath=await uploader(path);
                urls.push(newpath);
                fs.unlinkSync(path);

            }
            const findProduct = await Product.findByIdAndUpdate(id,{
                images:urls.map(file => 
                    {
                        return file;
                    }
                    ),
            },{
                new:true,
            });
            res.json(findProduct);
    }catch(error)
    {throw new Error(error)}
})




module.exports={createProduct,getaProduct,getAllProduct,updateProduct,deleteProduct,addToWishlist,rating,uploadImages};