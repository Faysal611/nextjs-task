import React from 'react';
import products from "../../../data/products.json";
import ProductDetails from '@/app/components/ProductDetails';

const page = ({params}) => {
    const {id} = params
    const productData = products.filter(data => id === data.id);

    return (
        <div>
            <ProductDetails data={productData[0]}></ProductDetails>
        </div>
    );
};

export default page;