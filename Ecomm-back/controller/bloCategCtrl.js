const BlogCategory= require('../models/blogCategModel');
const asyncHandler= require('express-async-handler');
const validateMongodbId=require('../utils/validateMongodbId');

const createBlogCategory=asyncHandler(async(req,res)=>{
    try{
        const newCategory= await BlogCategory.create(req.body);
        res.json(newCategory);
    }catch(error){
        throw new Error(error);
    }
});
const updateBlogCategory= asyncHandler(async(req,res)=>{

    const { id }= req.params;
    validateMongodbId(id);

    try{
        const updateCategory=await BlogCategory.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.json(updateCategory);
    }catch(error){
        throw new Error(error);
    }
});

const getBlogCategory = asyncHandler(async(req,res)=>{
    const { id }= req.params ;
    try{
        const getCategory= await BlogCategory.findById(id);
      
        res.json(getCategory);
    }catch(error){
        throw new Error (error);
    }
})

const getBlogAllCategory= asyncHandler(async(req,res)=>{
    try{
        const getallCategory= await BlogCategory.find();
        res.json(getallCategory);
    }catch(error){
        throw new Error(error);
    }
})


const delBogCategory= asyncHandler(async(req,res)=>{

    const { id }= req.params;
    validateMongodbId(id);
    try{
        const delCateg=await BlogCategory.findByIdAndDelete(id);
        res.json(delCateg);
    }catch(error){
        throw new Error(error);
    }
});


module.exports={createBlogCategory,delBogCategory,getBlogAllCategory,getBlogCategory,updateBlogCategory};