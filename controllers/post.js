const express = require('express');
const router = express.Router();

//Index
router.get('/', (req,res) => {
    res.status(200).json({message: 'post index'})
})


//Create
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "create post"})
});

// post SHOW ROUTE
router.get("/:id", async (req, res) => {
	res.status(200).json({message: "post show route: " + req.params.id })
});

// post DELETE ROUTE
router.delete("/:id", async (req, res) => {
	res.status(200).json({message: "post delete route: " + req.params.id })
});

// post UPDATE ROUTE
router.put("/:id", async (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "post update route: " + req.params.id })
});


module.exports = router