import { cartModel } from "./models/carts.models.js"

class MongoCartManager {

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

    createCart = async (cart) => {

        // try {

        //     const cartsDataBase = await this.readFile()

        //     if (cartsDataBase.length === 0) {

        //         cart.id = 1

        //     } else {
  
        //         cart.id = cartsDataBase[cartsDataBase.length - 1].id + 1;

        //     }

        //     cartsDataBase.push(cart)

        //     await fs.promises.writeFile(this.path, JSON.stringify(cartsDataBase, null, '\t'), 'utf-8')

        // } catch (error) {
        //     console.log(error)
        // } 

        const result = await cartModel.create(cart)
        
        return(result)

    }


    // BCKP
    // createCart = async (cart) => {

    //     try {

    //         const cartsDataBase = await this.readFile()

    //         if (cartsDataBase.length === 0) {

    //             cart.id = 1

    //         } else {
  
    //             cart.id = cartsDataBase[cartsDataBase.length - 1].id + 1;

    //         }

    //         cartsDataBase.push(cart)

    //         await fs.promises.writeFile(this.path, JSON.stringify(cartsDataBase, null, '\t'), 'utf-8')

    //     } catch (error) {
    //         console.log(error)
    //     } 

    // }



    getCartById = async (cid) => {
        // try {

        //     const cartsDataBase = await this.readFile()

        //     const cartUnit = cartsDataBase.find(searchCart => searchCart.id === parseInt(cid))

        //     if (!cartUnit) return 'No existe ningún carrito con ese ID'

        //     return cartUnit

        // } catch (error) {

        //     throw new Error("Not found");
        // }

        const cart = await cartModel.find({})

        return(cart)


    }


    //BCKP
    // getCartById = async (cid) => {
    //     try {

    //         const cartsDataBase = await this.readFile()

    //         const cartUnit = cartsDataBase.find(searchCart => searchCart.id === parseInt(cid))

    //         if (!cartUnit) return 'No existe ningún carrito con ese ID'

    //         return cartUnit

    //     } catch (error) {

    //         throw new Error("Not found");
    //     }

    // }



    addProductToCart = async (cid, pid) => {

        //try {

            //const cartsDataBase = await this.readFile()
            /*const cart = await cartModel.find(cart => cart.id === parseInt(cid))*/

            const cart = await cartModel.find(cid)

            const queryProduct = await cartModel.find({
                products: {
                  $elemMatch: {
                    product: pid
                  }
                }
              })

            console.log('El cart es', cart)
            console.log('El queryProduct es', queryProduct)

            if (!cart) return 'No existe ningún carrito con el indicado ID'

            //const productINDX = cart.products.findIndex(searchProduct => searchProduct.product === parseInt(pid))



            //const productINDX = cart.products.findIndex(searchProduct => searchProduct.product === parseInt(pid))
            
            if ( isNaN(pid) || parseInt(pid) <= 0 ) return 'ID de producto incorrecto'

            if (productINDX === -1 && parseInt(pid) > 0) {

                const plusProduct = {

                    product: parseInt(pid),
                    quantity: 1

                }

                cart.products.push(plusProduct)

            } else {

                cart.products[productINDX].quantity += 1

            }

            return cart
            


            //await fs.promises.writeFile(this.path, JSON.stringify(cartsDataBase, null, '\t'), 'utf-8')            

        // } catch (error) {

        //     throw new Error("Not found");
        // }
    }



    // BCKP
    // addProductToCart = async (cid, pid) => {

    //     try {

    //         const cartsDataBase = await this.readFile()
    //         const cart = cartsDataBase.find(cart => cart.id === parseInt(cid))

    //         if (!cart) return 'No existe ningún carrito con el indicado ID'

    //         const productINDX = cart.products.findIndex(searchProduct => searchProduct.product === parseInt(pid))

    //         if ( isNaN(pid) || parseInt(pid) <= 0 ) return 'ID de producto incorrecto'

    //         if (productINDX === -1 && parseInt(pid) > 0) {

    //             const plusProduct = {

    //                 product: parseInt(pid),
    //                 quantity: 1

    //             }

    //             cart.products.push(plusProduct)

    //         } else {

    //             cart.products[productINDX].quantity += 1

    //         }

    //         await fs.promises.writeFile(this.path, JSON.stringify(cartsDataBase, null, '\t'), 'utf-8')

    //         return cart

    //     } catch (error) {

    //         throw new Error("Not found");
    //     }
    // }

}

export default MongoCartManager