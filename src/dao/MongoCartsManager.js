import { cartModel } from "./models/carts.models.js"
import { productModel } from "./models/products.models.js"

class MongoCartManager {

    createCart = async () => {

        const rest = new cartModel().save()

        console.log(rest)

        

    }

    getCartById = async (cid) => {

        const cart = await cartModel.find({})

        return(cart)

    }



    addProductToCart = async (cid, pid, quantity) => {

            console.log(cid)
        
            const cart = await cartModel.findOne({_id: cid})

            if(!cart) {
                
                throw new Error ('No existe el carrito')
            
            }

            const product = await productModel.findOne({_id: pid})

            if(!product) {
                
                throw new Error ('No existe el producto')
            
            }


            const nuevoObjeto = {

                product: pid,
                quantity

            }

            let check = false;

            cart.products.forEach(product => {

                console.log(product)

                if (product.product === pid){

                     product.quantity += quantity
                     
                     check = true;

                }                
            });

            if(check) {

                return await cartModel.findByIdAndUpdate({_id: cid}, cart)

            }

            await cartModel.findByIdAndUpdate(cid, { $push: { products: nuevoObjeto } })

    }
}

export default MongoCartManager