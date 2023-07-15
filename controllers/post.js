const express = require('express');
const router = express.Router();
const { Post } = require('../models/Index')

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
        await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
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


module.exports = router