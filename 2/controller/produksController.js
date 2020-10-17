const {Produk} = require('../models');

class ProduksController {
    static getData(req, res) {
        Produk.findAll()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }
}


module.exports = ProduksController