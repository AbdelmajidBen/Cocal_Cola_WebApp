const express= require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createBlog, updateBlog, getBlog,getAllBlogs, delBlog,uploadImages } = require('../controller/blogCtrl');
const { uploadPhoto, blogsImgResize } = require('../middlewares/uploadImages');
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createBlog);
router.put('/upload/:id',authMiddleware,isAdmin,uploadPhoto.array("images",2),blogsImgResize,uploadImages)

router.put('/:id',authMiddleware,isAdmin,updateBlog)

router.get('/:id',getBlog);
router.get('/',getAllBlogs);
router.delete('/:id',authMiddleware,isAdmin,delBlog);




module.exports = router;
