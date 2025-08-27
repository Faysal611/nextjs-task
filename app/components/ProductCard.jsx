import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-4">
            {/* Product Image */}
            <img
                src={data.photo_url}
                alt={data.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
            />

            {/* Product Name */}
            <h2 className="text-lg font-semibold text-gray-900 mb-3">{data.name}</h2>

            {/* Details Button */}
            <Link href={`/products/${data.id}`}>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
                    Details
                </button>
            </Link>
        </div>
    );
};

export default ProductCard;
