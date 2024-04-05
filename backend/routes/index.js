'use strict'
const express = require('express');
const fs = require('fs')
const router = express.Router()

///////////////// AUTOMATIZACION DE GENERACION DE RUTAS POR NOMBRE DE ARCHIVO

const PATH_ROUTES = __dirname;

const quitarExtension = (fileName) =>{
    return fileName.split('.').shift()
} 

const aux = fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name =  quitarExtension(file)
    if(name !== 'index' ){
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router