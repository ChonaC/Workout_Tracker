const express = require("express");
const path = require("path");
const router = require("express").Router();

//display homepage
// router.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "../Develop/Public/index.html"));
// });

//display exercise page 
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../Develop/Public/excercise.html"));
});

//display stats page
router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../Develop/Public/stats.html"));
});

module.exports = router