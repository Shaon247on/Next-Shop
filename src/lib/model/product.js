import mongoose from "mongoose";
const stockSchema = new mongoose.Schema({
    brown: {
        XL: { type: Number, required: false },
        L: { type: Number, required: false },
        M: { type: Number, required: false },
        S: { type: Number, required: false }
    },
    black: {
        XL: { type: Number, required: false },
        L: { type: Number, required: false },
        M: { type: Number, required: false },
        S: { type: Number, required: false }
    }
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    stock: {
        type: stockSchema,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    additionalInfo: {
        type: String,
        required: true
    },
    ProductInfo: {
        type: String,
        required: true
    }
});

export const Product = mongoose.models.products || mongoose.model("products", productSchema)