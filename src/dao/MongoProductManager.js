
import { productModel } from "./models/products.models.js"

class MongoProductManager {

    // constructor(path) {
    //     this.path = path
    // }

    // readFile = async () => {

    //     try {
    //         const dataJson = await fs.promises.readFile(this.path, 'utf-8')
    //         return JSON.parse(dataJson)

    //     } catch (error) {

    //         console.log(error)
    //         return []

    //     }
    // }

    addProduct = async (product) => {
        
        // try {

        //     const productsDataBase = await this.readFile()

        //     const codeCreated = productsDataBase.find(article => product.code === article.code)

        //     if (codeCreated) return 'El código que intenta cargar ya existe en la base'

        //     if (productsDataBase.length === 0) {
        //         product.id = 1
        //     } else {
        //         product.id = productsDataBase[productsDataBase.length - 1].id + 1;
        //     }

        //     productsDataBase.push(product)

        //     await fs.promises.writeFile(this.path, JSON.stringify(productsDataBase, null, '\t'), 'utf-8')

        //     return productsDataBase
            
        // } catch (error) {
        //     console.log(error)
        // }

        const result = await productModel.create(product)
        
        return(result)






        //BCKP
        // try {

        //     const productsDataBase = await this.readFile()

        //     const codeCreated = productsDataBase.find(article => product.code === article.code)

        //     if (codeCreated) return 'El código que intenta cargar ya existe en la base'

        //     if (productsDataBase.length === 0) {
        //         product.id = 1
        //     } else {
        //         product.id = productsDataBase[productsDataBase.length - 1].id + 1;
        //     }

        //     productsDataBase.push(product)

        //     await fs.promises.writeFile(this.path, JSON.stringify(productsDataBase, null, '\t'), 'utf-8')

        //     return productsDataBase
            
        // } catch (error) {
        //     console.log(error)
        // }
    }

    getProducts = async () => {
    //getProducts = async (req, res) => {        

        // try {

        //     return await this.readFile()

        // } catch {

        //     throw new Error("Base not found");

        // }

        const products = await productModel.find({})
        //res.send(products)

        return(products)




        //BCKP
        // try {

        //     return await this.readFile()

        // } catch {

        //     throw new Error("Base not found");

        // }
    }

    getProductById = async (pid) => {

        try {

            const productsDataBase = await this.readFile()

            const chargedId = productsDataBase.find(article => article.id === parseInt(pid))

            if (!chargedId) return 'No se registra ningún producto con ese ID'

            return chargedId

        } catch (error) {

            throw new Error("Not found");

        }
    }

    getProductsLimit = async (limit) => {

        try {

            const productsDataBase = await this.readFile()

            if (limit > 0 && limit <= productsDataBase.length) {

                const prodsLimit = []

                for (let i = 0; i < parseInt(limit); i++) {

                    prodsLimit.push(productsDataBase[i])

                }

                return prodsLimit

            } else {

                return productsDataBase

            }

        } catch (error) {

            console.log(error)

        }
    }

    //updateProduct = async (pid, productToUpdate) => { 
    updateProduct = async (pid, title, description, price , thumbnail, code, stock) => {

        const result = await productModel.updateOne({_id: pid}, {title, description, price , thumbnail, code, stock})

        //const result = await productModel.updateOne({_id: pid}, {productToUpdate})

        return(result)        

    }


    // BACKUP
    // updateProduct = async (pid, producToUpdate) => {

    //     try {

    //         const productsDataBase = await this.readFile()

    //         const checkId = productsDataBase.findIndex((article) => article.id === parseInt(pid))

    //         if (checkId < 0) {

    //             return (Error, 'No existe producto con el ID indicado')
    //         }

    //         productsDataBase[checkId] = {

    //             ...productsDataBase[checkId],
    //             ...producToUpdate,

    //         }

    //         await fs.promises.writeFile(this.path, JSON.stringify(productsDataBase, null, '\t'), 'utf-8')

    //         return productsDataBase

    //     } catch (error) {

    //         console.log(error)

    //     }
    // }



    deleteProduct = async (pid) => {

        const result = await productModel.deleteOne({_id: pid})

        return(result)

    }




    // deleteProduct = async (pid) => {
    //     try {

    //         const productsDataBase = await this.readFile()

    //         const checkId = productsDataBase.findIndex((article) => article.id === parseInt(pid))

    //         if (checkId < 0) {

    //             return (Error, 'No existe el producto')
    //         }

    //         const newDataBase = productsDataBase.filter((tempProduct) => tempProduct.id !== parseInt(pid))

    //         await fs.promises.writeFile(this.path, JSON.stringify(newDataBase, null, '\t'), 'utf-8')

    //         return (await this.readFile())

    //     } catch (error) {

    //         console.log(error)

    //     }
    // }



}






export default MongoProductManager