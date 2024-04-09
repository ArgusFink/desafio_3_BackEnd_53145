import { Router } from 'express'
const router = Router()

import { ProductManager } from './productManager.js'

//import express from 'express'
//const router = express.Router()

//router.get('/', (req, res ) => {})
//router.post('/', (req, res ) => {})

router.get('/', async (req, res) => {

    const { limit } = req.query

    if (limit === undefined || limit < 0 || isNaN(limit)) {

        res.send(await products.getProducts())

    } else {

        res.send(await products.getProductsLimit(limit))

    }
})

router.get('/:pid', async (req, res) => {

    const { pid } = req.params

    res.send(await products.getProductById(pid))

})

router.post('/', async (req, res) => {

    
    //CAMBIAR POR LOS QUE INDICA LA PRE ENTREGA
    const { title, description, price , thumbnail, code, stock } = req.body

    //CAMBIAR POR LOS QUE INDICA LA PRE ENTREGA
    if (!title || !description || !price || !code || !stock) return res.send({ status: 'error', error: 'faltan completar campos' })

    const newProduct = {
    //CAMBIAR POR LOS QUE INDICA LA PRE ENTREGA
        title,
        description,
        price,
        thumbnail,
        code,
        stock

    }

    // VER SI AGREGO EL RESTO DE LOS STATUS A LOS OTROS METODOS DEL CRUD
    // Y VER DE HACER FUNCIONAR LO DEL PAYLOAD
    res.status(200).send(await products.addProduct(newProduct))
    //res.status(200).send({ status: 'success', payload: newProduct })

    

    //res.status(200).send(await products.addProduct(newProduct),({ status: 'success', payload: newProduct }))

})

router.put('/:pid', async (req, res) => {

    const { pid } = req.params
    const productToUpdate = req.body

    res.send(await products.updateProduct(pid, productToUpdate))

})


router.delete('/:pid', async (req, res) => {

    const { pid } = req.params

    //const productToDel = users.filter(user => user.id !== parseInt(uid))

    res.send(await products.deleteProduct(pid))

    //res.send({ status: 'success', payload: usersResult })

})

export default router