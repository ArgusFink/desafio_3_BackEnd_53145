// 1º 37'
import { Router } from "express"
import ProductManager from '../dao/FSproductManager.js'

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

router.get('/realTimeProducts', (req, res) => {

    res.render('realTimeProducts', {})

})

export default router