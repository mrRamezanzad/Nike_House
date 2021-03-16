const express     = require("express"),
      app         = express(),
      bodyparser  = require("body-parser"),
      path        = require("path"),
      product     = require(path.join(__dirname, "/routes/product.js")),
      pages       = require(path.join(__dirname, "/routes/pages.js")),
      DB          = require(path.join(__dirname, "/DB/products.json"))

// Make DB Files Accessible For Every Routes
app.use("/", (req, res, next) => {
    req.DB = DB
    next()
})

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use("/", pages)
app.use("/product", product)

// Handle 404 Routes
app.get("*", (req, res) => {
    res.render(path.join(__dirname, "/views/404"))
})

app.listen(80, () => {
    console.log(`================================= started at: http://localhost:80 =================================`);
})