const express= require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createBlogCategory,delBogCategory,getBlogAllCategory,getBlogCategory,updateBlogCategory } = require('../controller/bloCategCtrl');
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createBlogCategory);
router.put('/:id',authMiddleware,isAdmin,updateBlogCategory)

router.get('/:id',getBlogCategory);
router.get('/',getBlogAllCategory);
router.delete('/:id',authMiddleware,isAdmin,delBogCategory);




module.exports = router;
