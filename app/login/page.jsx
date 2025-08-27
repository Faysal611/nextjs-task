"use client";

import React from 'react';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    const handleSubmit = async e => {
        e.preventDefault();

        const res = await signIn("credentials", {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
        })

        if(res.error) {
            alert("Wrong")
        } else {
            alert("Done")
            router.push("/")
        }
    }

    const {data} = useSession();
    

    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-5 border border-gray-600 rounded-2xl'>
                <label htmlFor="email" className='flex flex-col'>Email
                    <input type="email" defaultValue={"test@example.com"} name='email' id='email' placeholder="neutral" className="input w-[500px] input-neutral" />
                </label>
                <label htmlFor=" password" className='flex flex-col'>Password
                    <input type="password" defaultValue={"1234"} name='password' id='password' placeholder="Enter your password" className="input w-[500px] input-neutral" />
                </label>
                <input type="submit" value="Log In" className='btn w-max border-2 border-black rounded-xl' />
            </form>
        </div>
    );
};

export default page;