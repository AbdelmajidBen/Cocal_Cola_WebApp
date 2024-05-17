const Blog= require('../models/blogModel')
const User=require('../models/userModel');
const couldinaryUploadIMg= require('../utils/cloudinary');
var mongoose = require('mongoose');

const asyncHandler = require("express-async-handler");
const fs = require('fs');
const validateMongodbId=require('../utils/validateMongodbId');
const blogModel = require('../models/blogModel');

const createBlog=asyncHandler(async(req,res)=>{

    try{
        const newBlog = await Blog.create(req.body);
        res.json(

            newBlog,
        );
    } catch(error){
        throw new Error(error);
    }
});
const updateBlog= asyncHandler(async(req,res)=>{

    const { id }= req.params;
    validateMongodbId(id);

    try{
        const updateBlog=await Blog.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.json(updateBlog);
    }catch(error){
        throw new Error(error);
    }
});

const getBlog = asyncHandler(async(req,res)=>{
    const { id }= req.params ;
    try{
        const getBlog= await Blog.findById(id);
       const updateViews= await Blog.findByIdAndUpdate(id,{$inc:
            {numberViews: 1},
        },
        {
            new: true}
            );
        res.json(getBlog);
    }catch(error){
        throw new Error (error);
    }
})

const getAllBlogs= asyncHandler(async(req,res)=>{
    try{
        const getBlogs= await Blog.find();
        res.json(getBlogs);
    }catch(error){
        throw new Error(error);
    }
})


const delBlog= asyncHandler(async(req,res)=>{

    const { id }= req.params;
    validateMongodbId(id);
    try{
        const delBlog=await Blog.findByIdAndDelete(id);
        res.json(delBlog);
    }catch(error){
        throw new Error(error);
    }
});

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
            const findBlog = await Blog.findByIdAndUpdate(id,{
                images:urls.map(file => 
                    {
                        return file;
                    }
                    ),
            },{
                new:true,
            });
            res.json(findBlog);
    }catch(error)
    {throw new Error(error)}
})






module.exports={createBlog,updateBlog,getBlog,getAllBlogs,delBlog,uploadImages};