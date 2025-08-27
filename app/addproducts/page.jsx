"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import productsData from "../../data/products.json";

const Page = () => {
    const router = useRouter();
    const { data, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries())
        data.price = parseFloat(data.price);
        data.rating = parseFloat(data.rating);
        data.id = "p" + (productsData.length + 1);
        
        const res = await fetch("/api/addProduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const resData = await res.json();
        alert(resData.message)
    }

    if (status === "authenticated") {
        return (
            <div>
                <h2 className='text-3xl font-bold my-5'>Add Products</h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex mb-15 mx-auto flex-col gap-5 bg-white p-6 rounded-2xl shadow-md w-[400px]"
                >

                    <label className="flex flex-col">
                        Product Name
                        <input
                            type="text"
                            name="name"
                            placeholder="Gaming Mechanical Keyboard"
                            className="input border rounded-lg p-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Photo URL
                        <input
                            type="text"
                            name="photo_url"
                            placeholder="https://example.com/photo.jpg"
                            className="input border rounded-lg p-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Description
                        <textarea
                            name="description"
                            placeholder="RGB mechanical keyboard with blue switches."
                            className="input border rounded-lg p-2 h-32 overflow-x-hidden"
                        />
                    </label>

                    <label className="flex flex-col">
                        Price ($)
                        <input
                            type="number"
                            step="0.01"
                            name="price"
                            placeholder="59.00"
                            className="input border rounded-lg p-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Rating
                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            max="5"
                            name="rating"
                            placeholder="4.7"
                            className="input border rounded-lg p-2"
                        />
                    </label>

                    <button
                        type="submit"
                        className="btn bg-gray-500 text-white rounded-lg py-2 hover:bg-black"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    return null;
};

export default Page;
