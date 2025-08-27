"use client";

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const {data} = useSession();

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={"/"} className='font-bold'>Home</Link></li>
                        <li>
                            <Link href="/products" className='font-bold'>Products</Link>
                        </li>
                        <li><Link href={"/addproducts"} className='font-bold'>Add products</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">NextStore</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"} className='font-bold'>Home</Link></li>
                    <li>
                        <Link href="/products" className='font-bold'>Products</Link>
                    </li>
                    <li><Link href={"/addproducts"} className='font-bold'>Add products</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    data?.user ? <button onClick={() => {
                        signOut();
                        alert("Log out successful")    
                    }} 
                    className='btn bg-gray-500 rounded-lg text-white'>Log Out</button> : <Link href={"/login"} className="btn bg-gray-500 rounded-lg text-white">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;