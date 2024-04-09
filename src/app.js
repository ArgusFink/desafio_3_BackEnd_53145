//const express = require('express')

import express from 'express'

import productsRouter from './routes/products.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//const { ProductManager } = require("./productManager");

const path = '../file/Products.json'
 
const products = new ProductManager(path)

const main = () => {

    
    app.use('/api/products', productsRouter)


    app.listen(8080, error => {

        console.log('Escuchando el puerto 8080')

    })
}

main()