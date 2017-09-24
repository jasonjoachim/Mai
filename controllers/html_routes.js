// Import packages
const express = require("express");
const path    = require("path");

// Create an instance of Router
const router = express.Router();



/****************************************************************************
 ****************************************************************************
    
    Set up routes
    
*****************************************************************************
*****************************************************************************/
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/about-mai", (req, res) => {
    res.render("about-mai");
});

router.get("/about-devs", (req, res) => {
    res.render("about-devs");
});