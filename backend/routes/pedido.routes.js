import { Router } from "express"

import Pedido from '../models/pedido.model.js'

const pedidoRouter = Router()

pedidoRouter.post('/', (req,res) => { //? cambiamos nombre de ruta?? // Te hago un md pa q veas como se hace
    Pedido.create(req.body)
    .then(data => {
        console.log('Se insertó un pedido')
        res.send(data)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
        res.status(500).send({message: 'Error al insertar el pedido'})
    })
})

pedidoRouter.get('/', (req, res) => {
    Pedido.find()
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
        res.status(500).send({message: 'Error al obtener los pedidos'})
    })
})

pedidoRouter.get('/:id', (req, res) => {
    const {id} = req.params
    Pedido.findById(id)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
        res.status(500).send({message: 'Error al obtener el pedido'})
    })
})

pedidoRouter.put('/:id', (req, res) => {
    const {id} = req.params
    Pedido.findByIdAndUpdate(id, {
        $set: req.body
    })
    .then(data => {
        console.log('Se ha actualizado')
        res.send(data)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
        res.status(500).send({message: 'Error al actualizar el pedido'})
    })
})

pedidoRouter.delete('/:id', (req, res) => {
    const {id} = req.params
    Pedido.findByIdAndDelete(id)
    .then(data => {
        console.log('Se eliminó el pedido')
        res.send(data)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
        res.status(500).send({message: 'Error al eliminar el pedido'})
    })
})

export default pedidoRouter