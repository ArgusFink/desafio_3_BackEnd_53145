import express from 'express'
import productsRouter from './routes/products.router.js'
import { cartsRouter } from './routes/carts.router.js'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'

const app = express() 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')


const prods = await products.readFile()

app.get('/', (req, res) => {

    res.render('home', {

        prods,
        role

    }) 

})

const main = () => {
    
    app.use('/api/products', productsRouter)
    app.use('/api/carts', cartsRouter)


    app.listen(8080, error => {

        if (error) console.log(error)
        console.log('Escuchando el puerto 8080')

    }) 
}

main()