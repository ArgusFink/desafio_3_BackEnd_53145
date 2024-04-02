const fs = require('node:fs')
const { stringify } = require('node:querystring')

class ProductManager {

    constructor(path) {
        this.path = path
    }

    readFile = async () => {

        try {
            const dataJson = await fs.promises.readFile(this.path,'utf-8')
            return JSON.parse(dataJson)

        } catch (error) {

            return []

        }
    }
    
    getProducts = async () => {

        try {

            return await this.readFile()

        } catch {

            throw new Error("Base not found");

        }
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

            if (limit > 0 && limit <= productsDataBase.length ) {

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
}

module.exports = {
    ProductManager
}