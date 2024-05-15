import { Router } from 'express'
import ProductManager from '../dao/FSproductManager.js'
import MongoProductManager from '../dao/MongoProductManager.js'

const router = Router()
const path = './src/file/Products.json'
const products = new ProductManager(path)
const mongoProducts = new MongoProductManager()

router.get('/', async (req, res) => {

    const { limit } = req.query

    let products 

    if(!limit) {

        products = await mongoProducts.getProducts()

        return res.json(products)        
    
    } 

    products = await mongoProducts.getProductsLimit(limit)
        
    res.json(products)

})

router.get('/:pid', async (req, res) => {

    const { pid } = req.params

    res.send(await mongoProducts.getProductById(pid))

})

router.post('/', async (req, res) => {

    const { title, description, price , thumbnail, code, stock } = req.body

    if (!title || !description || !price || !code || !stock) return res.send({ status: 'error', error: 'faltan completar campos' })

    const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }

    res.status(200).send(await mongoProducts.addProduct(newProduct))

})

router.put('/:pid', async (req, res) => {

    const { pid } = req.params
    
    const { title, description, price , thumbnail, stock } = req.body

    if (!title && !description && !price && !stock) {
        
        console.log(title)

        return res.send({ status: 'error', error: 'faltan completar campos' })

    }

    await mongoProducts.updateProduct(pid, req.body)

    res.json({Status:'success', message:'Producto actualizado', payload: null})

})

router.delete('/:pid', async (req, res) => {

    const { pid } = req.params

    await mongoProducts.deleteProduct(pid)

    res.json({Status:'success', message:'Producto eliminado', payload: null})


})

export default router