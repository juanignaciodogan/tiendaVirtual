

//ARCHIVO DE CONEXION A MONGODB


const mongoose = require('mongoose');  

const dbConnect = async () => {
    try {
        const URI = process.env.DB_URI;  // Toma la cadena de conexión desde la variable de entorno en el archivo .env
        await mongoose.connect(URI);
        console.log('BASE CONECTADA');
    } catch (error) {
        console.log('Error de conexion', error);
    }
}

module.exports = dbConnect;