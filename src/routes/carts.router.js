import { Router } from 'express'
import CartManager from '../dao/FScartsManager.js'
import MongoCartManager from '../dao/MongoCartsManager.js'


export const cartsRouter = Router()
const path = './src/file/Carts.json'
const carts = new CartManager(path)
const mongoCarts = new MongoCartManager()

cartsRouter.post('/', async (req, res) => {

    const { products: [] } = req.body

    const newCart = {
    
            id: undefined,
            products: []
    
        }

    res.status(200).send(await mongoCarts.createCart(newCart))

})


//BCKP
// cartsRouter.post('/', async (req, res) => {

//     const { products: [] } = req.body

//     const newCart = {
    
//             id: undefined,
//             products: []
    
//         }

//     res.status(200).send(await carts.createCart(newCart))

// })

cartsRouter.get('/:cid', async (req, res) => {

    const { cid } = req.params

    res.status(200).send(await mongoCarts.getCartById(cid))

})


//BCKP
// cartsRouter.get('/:cid', async (req, res) => {

//     const { cid } = req.params

//     res.status(200).send(await carts.getCartById(cid))

// })


cartsRouter.post('/:cid/product/:pid', async (req, res) => {

    const { cid, pid } = req.params

    res.status(200).send(await mongoCarts.addProductToCart({_id: cid}, pid))



})



// BCKP
// cartsRouter.post('/:cid/product/:pid', async (req, res) => {

//     const { cid, pid } = req.params

//     res.status(200).send(await carts.addProductToCart(cid, pid))

// })