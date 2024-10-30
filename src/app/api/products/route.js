import { Product } from "@/src/lib/model/product";
import connectDB from "@/src/lib/mongoDB/connectDB";

import { NextResponse } from "next/server";

// const mongoURL = process.env.MONGODB_URI
export async function GET() {

    let data = []
    try {
        await connectDB()
        data = await Product.find()
    } catch (error) {
        data = { success: false }
    }
    // console.log(data);
    return NextResponse.json({ result: data, success: true })
}

export async function POST(req) {
    await connectDB()

    try {
        const { id, newPrice } = req.body
        await Product.updateOne({ _id: new ObjectId(id) }, { $set: { price: newPrice } })
        return NextResponse.json({ success: true, newPrice } )
    } catch (error) {
        console.log("DataBase Error:",error);
        return NextResponse.json({success: false, message: "Database Error"}, {status: 500})
    }



    // const payload = await req.json()
    // let product = new Product(payload)

    // try {
    //     const result = await product.save()  
    //     return NextResponse.json({result, success: true})
    // } catch (error) {
    //     return NextResponse.json({success: false})
    // }
}