import { Schema, model } from "mongoose";

const cartsCollection = 'carts'

const cartSchema = Schema({

    products: {

        type: Array,
        required: false,
        default: []

    }
})


export const cartModel = model( cartsCollection, cartSchema)