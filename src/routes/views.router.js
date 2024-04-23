// 1º 37'
import { Router } from "express"
import ProductManager from '../managers/productManager.js'

const router = Router()
const path = './src/file/Products.json'
const products = new ProductManager(path)

router.get('/', async (req, res) => {

    //const prods = await products.readFile()

    res.render('home' , {

        // prods,
        // role
        

        username: 'arielfink',
        nombre: 'Ariel',
        apellido: 'Fink',
        title: 'marketShop || Ari',


        // (ref. 19asdx)
        prods: await products.readFile(),
        

        //prods

        // 21asdx 1º 23' 05'' 
        //role: true

    }) 

})

router.get('/realTimeProducts', (req, res) => {

    res.render('realTimeProducts', {})

})

export default router


// router.get('/', (req, res) => {

//     res.render('index', {

//         // prods,
//         // role
        

//         username: 'arielfink',
//         nombre: 'ariel',
//         apellido: 'fink',
//         title: 'mercaPulgas || Ari',

//         // (ref. 19asdx)
//         //products,
//         // 21asdx 1º 23' 05'' 
//         role: true

//     }) 

// })