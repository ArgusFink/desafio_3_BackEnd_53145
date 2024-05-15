import { Router } from 'express'
import CartManager from '../dao/FScartsManager.js'
import MongoCartManager from '../dao/MongoCartsManager.js'


export const cartsRouter = Router()
const path = './src/file/Carts.json'
const carts = new CartManager(path)
const mongoCarts = new MongoCartManager()

cartsRouter.post('/', async (req, res) => {

    res.status(200).send(await mongoCarts.createCart())

})

cartsRouter.get('/:cid', async (req, res) => {

    const { cid } = req.params

    res.status(200).send(await mongoCarts.getCartById(cid))

})

cartsRouter.post('/:cid/product/:pid', async (req, res) => {

    const { cid, pid } = req.params

    const quantity = 1

    res.status(200).send(await mongoCarts.addProductToCart(cid, pid, quantity))

})