const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const { ProductManager } = require("./productManager");

const path = './file/Products.json'

const products = new ProductManager(path)

const main = () => {

    app.get('/products', async (req, res) => {
    
        const { limit } = req.query

        if (limit === undefined || limit < 0 || isNaN(limit)) {

            res.send(await products.getProducts())

        } else {

            res.send(await products.getProductsLimit(limit))

        }    
    })

    app.get('/products/:pid', async (req, res) => {

        const { pid } = req.params

        res.send(await products.getProductById(pid))

    })
    
    
    
    app.listen(8080, error => {
    
        console.log('Escuchando el puerto 8080')
    
    })

 }
 
 main()