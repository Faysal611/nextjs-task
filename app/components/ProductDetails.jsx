"use client";

import React from "react";

const ProductDetails = ({ data }) => {
    if (!data) {
        return <div className="p-6 text-center text-gray-700">Product not found</div>;
    }

    return (
        <div className="max-w-3xl mx-auto my-20 bg-white border border-gray-300 rounded-2xl shadow-md p-6 mt-6">
            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.name}</h1>

            {/* Product Image */}
            <img
                src={data.photo_url}
                alt={data.name}
                className="w-full h-96 object-cover rounded-xl mb-6"
            />

            {/* Product Description */}
            <p className="text-gray-700 text-lg mb-4">{data.description}</p>

            {/* Product Price */}
            <p className="text-gray-900 font-semibold text-xl mb-2">Price: ${data.price}</p>

            {/* Product Rating */}
            <p className="text-gray-500 text-sm">Rating: ⭐ {data.rating}</p>

            {/* Back Button (Optional) */}
            <button
                onClick={() => window.history.back()}
                className="mt-6 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
            >
                Go Back
            </button>
        </div>
    );
};

export default ProductDetails;
