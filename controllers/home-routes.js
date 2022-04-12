const router = require('express').Router();

router.get("/", (req, res) => {
    res.render("homepage")
})

router.get("/about-me", (req, res) => {
    res.render("aboutMe")
})

module.exports = router