const router = require('express').Router()
const ProdukController = require("../controller/produksController")

router.get("/", (req, res) => {
    res.send("Welcome")
});

router.get("/produk", ProdukController.getData);

module.exports = router;

