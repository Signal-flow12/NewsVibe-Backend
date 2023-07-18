const express = require('express');
const router = express.Router();
const { Post, Comments } = require('../models/Index')

//Index
router.get('/', async (req,res) => {
    try{
        res.json(await Post.find({}));

    }catch (error){
        console.log(error)
    }
})


//Create
router.post("/", async (req, res) =>  {
	try{
        res.json(await Post.create(req.body))
    }catch(error){
        console.log(error)
    }
});

// post SHOW ROUTE
router.get("/:id", async (req, res) => {
	try{
        res.json(await Post.findById(req.params.id))
    }catch(error){
        console.log(error)
    }
});

// post DELETE ROUTE
router.delete("/:id", async (req, res) => {
	try {
        await Post.findByIdAndDelete(req.params.id, req.body)
    }catch(error){
        console.log(error)
    }
});

// post UPDATE ROUTE
router.put("/:id", async (req, res) => {
	try{
        res.json(await Post.findByIdAndRemove(req.params.id));
    }catch(error){
        console.log(error)
    }
});

router.post('/:id/comments', async (req, res, next) => {
    try {
        let newComment = req.body;
        // newComment.user = req.session.currentUser.id;
        newComment.post = req.params.id;
        res.json(await Comments.create(newComment));
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/:id/comments', async (req, res, next) => {
    try {
        const postComments = await Comments.find({post: req.params.id});
        res.json(postComments);
    } catch(err) {
        console.log(err);
        next();
    }
})


module.exports = router