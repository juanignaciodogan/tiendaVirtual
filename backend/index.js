
//IMPORTACION DE MODULES EXTERNOS
const  dbConnect  = require('./baseMongo')   //funcion de conexion codigo esta en baseMongo.js
const express = require('express')  // 
const cors = require('cors')  //middleware Cors completa automaticamente encabezados minimos requeridos
const  bodyparser = require('body-parser');
require("dotenv").config() // para utilizar las variables de etorno // estan en el archivo .env



const app = express()//inicialiozacion de objeto app con funcionalidades de la libreria express
app.use(express.json()) 
app.use(cors()) 
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json({extended:true, limit:'500mb'}))

const port = process.env.PORT || 3000   // aqui cargamos la variable de entorno si no la encuentra le asigna 000


app.listen(port, () => {
    console.log(`Servidor en puerto http://localhost:${port}`)
})

app.use('/api', require('./routes')) // ejecuta automaticamente index.js de la carpeta routes


dbConnect()  // ejecuta la conexion a mongoDB






