const express = require("express"),
      router  = express.Router(),
      path    = require("path")

router.get("/", (req, res) => {
    res.redirect("/home")
})
router.get("/home", (req, res) => {
    res.render(path.join(__dirname, "../views/index.ejs"), {
        DB: req.DB
    })
})
router.get("/about", (req, res) => {
    res.render(path.join(__dirname, "../views/about.ejs"))
})
router.get("/contact", (req, res) => {
    res.render(path.join(__dirname, "../views/contact.ejs"))
})

module.exports = router