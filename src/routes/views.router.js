import { Router } from "express"
import ProductManager from '../dao/FSproductManager.js'
import MongoProductManager from "../dao/MongoProductManager.js"

const router = Router()
const path = './src/file/Products.json'
const products = new ProductManager(path)

router.get('/', async (req, res) => {

    //const prods = await products.readFile()

    res.render('home' , {

        username: 'arielfink',
        nombre: 'Ariel',
        apellido: 'Fink',
        title: 'marketShop || Ari',

        prods: await products.readFile(),

    }) 

})

// router.get('/', async (req, res) => {

//     const productService = new MongoProductManager()
//     const { docs, page, hasPrevPage, hasNextPage, prevPage, nextPage } = await productService.getProducts()

//     res.render('home' , {

//         username: 'arielfink',
//         nombre: 'Ariel',
//         apellido: 'Fink',
//         title: 'marketShop || Ari',

//         prods: await products.readFile(),

//     }) 

// })


router.get('/realTimeProducts', (req, res) => {

    res.render('realTimeProducts', {})

})



// router.get('/realTimeProducts', async (req, res) => {

    
//     const productService = new MongoProductManager()
//     const { docs, page, hasPrevPage, hasNextPage, prevPage, nextPage } = await productService.getProducts()

//     res.render('realTimeProducts', {

//         products: docs,
//         page,
//         hasPrevPage,
//         hasNextPage,
//         prevPage,
//         nextPage   

//     })

// })



router.get('/products', async (req, res) => {

    const {numPage, limit} = req.query
    const productsService = new MongoProductManager()
    const { docs, page, hasPrevPage, hasNextPage, prevPage, nextPage } = await productsService.getProducts({limit, numPage})

    //console.log(result)

    res.render('products', {

        prods: docs,
        page,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage   

    })


    // res.render('products', {

    //     products: await productsService.getProducts(),

    // })




})

export default router