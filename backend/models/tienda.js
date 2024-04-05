//IMPORTACION DE MODULES EXTERNOS
const mongoose = require('mongoose')
const mongoTenant = require('mongo-tenant')

//Inicio objeto Modelo TiendaShcema formateado con mongoose
// Ver Documentacion "ModelosDatos"

const TiendaSchema = new mongoose.Schema({

    //datos del dueño de la tienda

    
    usuario:[{
        nombres:{type: String, required:false},
        apellidos:{type: String, required:false},
        email:{type: String, required:false, unique:false},
        password:{type: String, required:false},
        dni:{type: String, required:false, unique:false},
        pais:{type: String, required:false},
        // TODO datos de facturacion
    }],

    //propiedades de configuracion de la plantilla de la tienda
    plantilla:[{
        nombreTienda:{type: String, required:false, unique:false},
        logoTienda:{type: String, required:false},
        colorPrimary:{type: String, required:false},
        colorSecondary:{type: String, required:false},
        textAnuncio:{type: String, required:false},
        linkFace:{type: String, required:false},
        linkInsta:{type: String, required:false},
        linkPinterest:{type: String, required:false},
        linkTwitter:{type: String, required:false},
    }],


    // Productos:
    categorias:[{
        categoria:{type: String, required:false},
        subcategoria:{type: String, required:false},
    }],

    variantes:[{
        variante:{type: String, required:false},
    }],

    productos:[{
        titulo:{type: String, required:false},
        descripcion:{type: String, required:false},
        tipo:{type: String, required:false},
        categoria:{type: String, required:false},
        estado:{type: String, required:false},
        
        imagenes:[{
            imagenPortada:{type: String, required:false},
            imagen2:{type: String, required:false},
            imagen3:{type: String, required:false},
            imagen4:{type: String, required:false},
            imagen5:{type: String, required:false},
                   }],
        
        variantes:[{
            badge:{type: String, required:false},
            variante:{type: String, required:false},
            precio:{type: String, required:false},
            costo:{type: String, required:false},
            stock:{type: String, required:false},            
        }]
    }],


mediosdepago:
{
    mercadopago:{type: String, required:false, unique:false},     
    paypal:{type: String, required:false},     

},
   
})

TiendaSchema.plugin(mongoTenant)   //a tiendaSCHEMA agregamos el formato TENANT
module.exports = mongoose.model('Tienda', TiendaSchema)   // 'Tienda' es el nombre de la coleccion en la base


