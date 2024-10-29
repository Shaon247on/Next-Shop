'use client'


import useAxios from "@/src/Hooks/useAxios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
    const [products, setProducts] = useState([])
    const axios = useAxios()
    useEffect(() => {
        const dataFetching = async () => {
            const { data } = await axios.get()
            console.log(data.result);
            setProducts(data.result)
        }
        dataFetching()
    }, [])


    return (
        <div>
            
            {
                products.map(product =>
                    <React.Fragment key={product._id}>
                        <h1 className="text-3xl ">{product.name}</h1>
                    </React.Fragment>
                )
            }
        </div>
    );
};

export default HomePage;