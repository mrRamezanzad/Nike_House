const express = require("express"),
      router  = express.Router(),
      path    = require("path")

router.get("/:productId", (req, res) => {
    res.render(path.join(__dirname, "../views/product.ejs"), {
        productId: req.params.productId,
        product: req.DB.find(el => el.id === parseInt(req.params.productId))
    })
})

module.exports = router