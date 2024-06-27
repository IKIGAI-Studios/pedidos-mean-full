import mongoose from 'mongoose';
const { Schema } = mongoose;

const pedidoSchema = new Schema({
    producto: { type: String, required: true },
    precio: { type: Number, required: true },
    fecha: { type: Date, required: true },
    nombre_cliente: { type: String, required: true },
    direccion_cliente: { type: String, required: true },
    tipo_pago: { type: String, required: true }
},{
    collection: 'pedidos'
})

export default mongoose.model('Pedido', pedidoSchema);