import { Product } from "@/src/lib/model/product";
import connectDB from "@/src/lib/mongoDB/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB()
        const count = await Product.countDocuments()
        return NextResponse.json({count}, {status:200})
    } catch (error) {
        return NextResponse.json({error:"Fail to connect documents"}, {status:500})
    }
}