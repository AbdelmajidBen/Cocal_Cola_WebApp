const express= require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createCategory, updateCategory,delCategory,getAllCategory,getCategory, } = require('../controller/categoryCtrl');

const router = express.Router();


router.post('/',authMiddleware,isAdmin,createCategory);
router.put('/:id',authMiddleware,isAdmin,updateCategory)

router.get('/:id',getCategory);
router.get('/',getAllCategory);
router.delete('/:id',authMiddleware,isAdmin,delCategory);

module.exports= router;