var Tienda = require('../models/tienda');
var bcrypt = require('bcrypt-nodejs');
// var jwt = require('../helpers/jwt')
// const psl = require('psl');

const getTiendas = (req, res) => {
    const data = ["Mensaje", "Obtener toda la base Tiendas"]
  
    res.send({data})
}

const createTienda = async function(req, res, tenant = null){            
    var data = req.body; 
    
    console.log(req.body.usuario[0].nombres)
    var clientAccount = req.body.req.body.usuario[0].nombres
    
    var tienda = Tienda.byTenant()      
    const tienda_arr = await tienda.find();
        if(tienda_arr.length === 0 ){   
          bcrypt.hash(data.usuario.password, null, null, async function (err, hash) { 
            data.usuario.password = hash
          var reg = await tienda.create(data);
          res.status(200).send({ estado:'Creado!',message:reg}) 
        })        
        }else{res.status(200).send({estado:'Ya existe ese usuario'})}
  

             
}


module.exports = { getTiendas, createTienda}

