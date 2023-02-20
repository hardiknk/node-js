const express = require('express');
const router = new express.Router();


//insert men ranking api and code 
const MenRanking = require("../models/mens");
router.post("/add-men-ranking", async (req, res) => {
    try {
        // res.send(req.body);
        const addManRanking = new MenRanking(req.body);
        const afterAdd = await addManRanking.save();
        res.send(afterAdd);
    } catch (error) {
        res.status(400).send(error);
    }
});

//get the all man ranking details 
router.post('/get-men-ranking', async (req, res) => {
    try {
        const fetchMenRanking = await MenRanking.find();
        res.send(fetchMenRanking);
    } catch (error) {
        res.status(400).end(error);
    }
});

//get the man ranking by id 
router.post('/get-men-ranking/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMan = await MenRanking.find({ _id: _id });
        res.send(getMan);
    } catch (error) {
        res.status(400).send(error);
    }
});

//upadte the man by ranking
router.post('/update-men-ranking/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        // const getMan = await MenRanking.findByIdAndUpdate(_id, req.body);  //here in postman show old data not update
        //this function is get newly updated data  
        const getMan = await MenRanking.findByIdAndUpdate(_id, req.body, {
            new: true,
        });

        res.send(getMan);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/delete-man-ranking', async (req, res) => {
    try {
        const _id = req.body._id;
        const deleteManRecord = await MenRanking.findByIdAndDelete({ _id: _id });
        if (deleteManRecord) {
            res.send(deleteManRecord);
        } else {
            res.send("something is wrong");
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;