import { Router } from "express"
import ProductManager from '../dao/FSproductManager.js'
import MongoProductManager from "../dao/MongoProductManager.js"

const router = Router()
const path = './src/file/Products.json'
const products = new ProductManager(path)

router.get('/', async (req, res) => {

    const productService = new MongoProductManager()
    const { docs, page, hasPrevPage, hasNextPage, prevPage, nextPage } = await productService.getProducts()

    res.render('home' , {

        username: 'arielfink',
        nombre: 'Ariel',
        apellido: 'Fink',
        title: 'marketShop || Ari',

        prods: await products.readFile(),

    }) 

})

router.get('/realTimeProducts', async (req, res) => {

    
    const productService = new MongoProductManager()
    const { docs, page, hasPrevPage, hasNextPage, prevPage, nextPage } = await productService.getProducts()

    res.render('realTimeProducts', {

        products: docs,
        page,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage   

    })

})

export default router