import express from 'express'
import productsRouter from './routes/products.router.js'
import viewsRouter from './routes/views.router.js'
import { cartsRouter } from './routes/carts.router.js'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import mongoose from 'mongoose'

const app = express()
const httpServer = app.listen(8080, error => {

    if (error) console.log(error)
    console.log('Escuchando el puerto 8080')

})
 
const io = new Server(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

mongoose.connect('mongodb+srv://arielqs61:HAfRjp4DspMMi8t9@ecommplayinthesky.c37lgwg.mongodb.net/c53145?retryWrites=true&w=majority&appName=EcommPlayInTheSky') 

// *******************************
console.log('base de datos conectada')
// *******************************

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

const main = () => {

    app.use('/', viewsRouter)
    app.use('/api/products', productsRouter)
    app.use('/api/carts', cartsRouter)

}

let products = []


io.on('connection', socket => {

    console.log('Client connected')

    socket.on('product_client', data => {

        console.log('product data: ', data)

        products.push(data)

        io.emit('productsLogs', products)

    })

})

main()