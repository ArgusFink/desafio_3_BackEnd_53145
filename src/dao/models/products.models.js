import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'


const productsCollection = 'products'

const productSchema = new Schema ({

    title: {

        type: String,
        required: true

    },
    description: String,
    price: {

        type: Number,
        required: true

    },
    thumbnail: String,
    code: {

        type: String,
        unique: true,
        required: true

    },
    stock: {

        type: Number,
        required: true

    } 

})

productSchema.plugin(mongoosePaginate)
export const productModel = model ( productsCollection, productSchema)