const Category= require('../models/categoryModel');
const asyncHandler= require('express-async-Handler');
const validateMongodbId=require('../utils/validateMongodbId');

const createCategory=asyncHandler(async(req,res)=>{
    try{
        const newCategory= await Category.create(req.body);
        res.json(newCategory);
    }catch(error){
        throw new Error(error);
    }
});
const updateCategory= asyncHandler(async(req,res)=>{

    const { id }= req.params;
    validateMongodbId(id);

    try{
        const updateCategory=await Category.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.json(updateCategory);
    }catch(error){
        throw new Error(error);
    }
});

const getCategory = asyncHandler(async(req,res)=>{
    const { id }= req.params ;
    try{
        const getCategory= await Category.findById(id);
      
        res.json(getCategory);
    }catch(error){
        throw new Error (error);
    }
})

const getAllCategory= asyncHandler(async(req,res)=>{
    try{
        const getallCategory= await Category.find();
        res.json(getallCategory);
    }catch(error){
        throw new Error(error);
    }
})


const delCategory= asyncHandler(async(req,res)=>{

    const { id }= req.params;
    validateMongodbId(id);
    try{
        const delCateg=await Category.findByIdAndDelete(id);
        res.json(delCateg);
    }catch(error){
        throw new Error(error);
    }
});


module.exports={createCategory,delCategory,getAllCategory,getCategory,updateCategory};