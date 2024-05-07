import { Schema, model } from "mongoose";

const cartsCollection = 'carts'

const cartSchema = new Schema ({

    _id: String,
    products: []

})


export const cartModel = model ( cartsCollection, cartSchema)