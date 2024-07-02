import { Router } from "express"

import Pedido from '../models/pedido.model.js'

const pedidoRouter = Router()

pedidoRouter.post('/', (req,res) => { //? cambiamos nombre de ruta??
    Pedido.create(req.body)
    .then(data => {
        console.log('Se insertó un pedido')
        res.send(data)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
    })
})

pedidoRouter.get('/', (req, res) => {
    Pedido.find()
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
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
    })
})

export default pedidoRouter