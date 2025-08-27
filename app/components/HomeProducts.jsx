import React from 'react';
import products from "../../data/products.json"
import ProductCard from './ProductCard';
import Link from 'next/link';

const HomeProducts = () => {
    return (
        <div className='mt-[70px] mb-[140px] flex flex-col items-center'>
            <h2 className='text-center font-bold text-4xl mb-9'>Check out our products</h2>
            <div className='flex gap-25 justify-around'>
                {products.slice(0, 3).map((data, index) => <ProductCard key={index} data={data}></ProductCard>)}
            </div>
            <Link href={"/products"}><button className='btn bg-black rounded-xl text-white w-max mt-9'>View All Products</button></Link>
        </div>
    );
};

export default HomeProducts;