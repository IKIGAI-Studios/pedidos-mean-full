import mongoose from "mongoose"

export async function connect() {
    const uri = `${process.env.DB_CONNECTION_LINK}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=AplicacionesWeb`
    
    try {
        const data = await mongoose.connect(uri)
        return console.log('Conectado a la base de datos:', data.connections[0].name)
    } catch (e) {
        return console.log('Error de conexión a la base de datos', e)
    }
}
