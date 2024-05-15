
import { productModel } from "./models/products.models.js"

class MongoProductManager {

    addProduct = async (product) => {
        
        return await productModel.create(product)
        
    }

    getProducts = async () => {

        return await productModel.find({})
    
    }

    getProductById = async (pid) => {

        return await productModel.findOne({_id: pid})

    }

    getProductsLimit = async (limit) => {

        return await productModel.find({}).limit(limit);
    
    }

    updateProduct = async (pid, params) => {

        const result = await productModel.updateOne({_id: pid}, {...params})

        return(result)        

    }

    deleteProduct = async (pid) => {

        const result = await productModel.deleteOne({_id: pid})

        return(result)

    }
}

export default MongoProductManager