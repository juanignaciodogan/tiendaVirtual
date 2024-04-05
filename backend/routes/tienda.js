const express = require('express');
const router = express.Router()

const { getTiendas, createTienda } = require('../controllers/tienda');

router.get("/", getTiendas)
router.post("/", createTienda)



module.exports = router