import express from 'express'
import dotenv from 'dotenv'
import pedidoRouter from './routes/pedido.routes.js'
import { connect } from './db/connection.js'

dotenv.config()

await connect()

const PORT = 3000 ?? process.env.PORT
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Test')
})

app.use('/api/pedidos', pedidoRouter)

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:'+PORT)
})