
import { productModel } from "./models/products.models.js"

class MongoProductManager {

    addProduct = async (product) => {
        
        return await productModel.create(product)
        
    }

    getProducts = async ({limit = 5, numPage = 1}) => {

        //return await productModel.find({})
        //return await productModel.paginate({}, {limit: 10, page: 2, lean: true})
        return await productModel.paginate({}, {limit: limit, page: numPage, lean: true})
    
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