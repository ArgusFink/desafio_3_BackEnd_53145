import { Router } from 'express'
import ProductManager from '../dao/FSproductManager.js'
import MongoProductManager from '../dao/MongoProductManager.js'
//import { productModel } from '../dao/models/products.models.js'

const router = Router()
const path = './src/file/Products.json'
const products = new ProductManager(path)
const mongoProducts = new MongoProductManager()

router.get('/', async (req, res) => {

    const { limit } = req.query

    if (limit === undefined || limit < 0 || isNaN(limit)) {
        
        res.send(await mongoProducts.getProducts())
        //const products = await productModel.find({})
        //res.send(products)


        //BCKP CONECTA A MONGO
        // const products = await productModel.find({})
        // res.send(products)

        //************************** */
        //    ADD LIMIT                /
        //************************** */
    } /*else {

        res.send(await products.getProductsLimit(limit))

    }*/
})

// <<< BCKP 
// router.get('/', async (req, res) => {

//     const { limit } = req.query

//     if (limit === undefined || limit < 0 || isNaN(limit)) {
        
//         res.send(await products.getProducts())

//     } else {

//         res.send(await products.getProductsLimit(limit))

//     }
// })

router.get('/:pid', async (req, res) => {

    const { pid } = req.params

    res.send(await products.getProductById(pid))

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



// BCKP
// router.post('/', async (req, res) => {

//     const { title, description, price , thumbnail, code, stock } = req.body

//     if (!title || !description || !price || !code || !stock) return res.send({ status: 'error', error: 'faltan completar campos' })

//     const newProduct = {
//         title,
//         description,
//         price,
//         thumbnail,
//         code,
//         stock
//     }

//     res.status(200).send(await products.addProduct(newProduct))

// })



router.put('/:pid', async (req, res) => {

    const { pid } = req.params
    //const { productToUpdate } = req.body
    const { title, description, price , thumbnail, code, stock } = req.body

    if (!title || !description || !price || !code || !stock) return res.send({ status: 'error', error: 'faltan completar campos' })

    //res.send(await mongoProducts.updateProduct(pid, productToUpdate))

    res.send(await mongoProducts.updateProduct(pid, title, description, price , thumbnail, code, stock))

})


//BCKP
// router.put('/:pid', async (req, res) => {

//     const { pid } = req.params
//     const productToUpdate = req.body

//     res.send(await products.updateProduct(pid, productToUpdate))

// })


router.delete('/:pid', async (req, res) => {

    const { pid } = req.params

    res.send(await mongoProducts.deleteProduct(pid))

})


//BCKP
// router.delete('/:pid', async (req, res) => {

//     const { pid } = req.params

//     res.send(await products.deleteProduct(pid))

// })

export default router