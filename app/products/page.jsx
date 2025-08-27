import React from 'react';
import products from "../../data/products.json";
import ProductCard from '../components/ProductCard';

const page = () => {
    return (
        <div className='my-19'>
            <h2 className='text-4xl font-bold mb-5 mt-9'>All Products</h2>
            <div className='grid gap-7 grid-cols-5'>
                {products.map(data => <ProductCard key={data.id} data={data}></ProductCard>)}
            </div>
        </div>
    );
};

export default page;