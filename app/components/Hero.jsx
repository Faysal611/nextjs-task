import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className="hero h-[500px] my-[70px]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome to NextStore</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link href={"/products"}><button className="btn bg-black text-white rounded-xl">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;