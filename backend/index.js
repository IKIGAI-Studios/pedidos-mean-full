import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import pedidoRouter from './routes/pedido.routes.js'
import { connect } from './db/connection.js'
import cors from 'cors'

dotenv.config()

await connect()

const PORT = 3000 ?? process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Test')
})

app.use(cors())

app.use('/api/pedidos', pedidoRouter)

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:'+PORT)
})