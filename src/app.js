import express from 'express'
import productsRouter from './routes/products.router.js'
import viewsRouter from './routes/views.router.js'
import { cartsRouter } from './routes/carts.router.js'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import { socketConf } from './config/socket.config.js';




// import { Router } from 'express'
// import ProductManager from '../managers/productManager.js'

// const router = Router()
// const path = './src/file/Products.json'
// const products = new ProductManager(path)

//import ProductManager from '../managers/productManager.js'
//const products = await ProductManager.readFile()
//const prods = await products.getProducts()

//import exphbs from  'express-handlebars';



const app = express()
const httpServer = app.listen(8080, error => {

    if (error) console.log(error)
    console.log('Escuchando el puerto 8080')

})

//const socketServer = new Server(httpServer)

const socketServer = socketConf(httpServer);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//app.engine('.hbs', exphbs({ extname: '.hbs' }));
//app.set('views', path.join(process.cwd(), 'views'));
//app.set('view engine', '.hbs');






//console.log(__dirname)






//const prods = await products.readFile()

// app.get('/', (req, res) => {

//     res.render('index', {

//         prods,
//         role

//     })  

// })

const main = () => {

    // 50'45''
    // app.get('/', (req, res) => {

    //     res.render('index', {

    //         user

    //     })

    // })









    app.use('/', viewsRouter)
    app.use('/api/products', productsRouter)
    app.use('/api/carts', cartsRouter)




    // app.listen(8080, error => {

    //     if (error) console.log(error)
    //     console.log('Escuchando el puerto 8080')

    // })

    socketServer.on('connection', () => {

        console.log('Nuevo Comprador Conectado')

        //console.log(socketServer)

    })

}



main()