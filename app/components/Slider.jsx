import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full h-[500px] my-[80px] rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg"
                    className="w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-photo/beauty-product-still-life_23-2147817669.jpg?semt=ais_hybrid&w=740&q=80"
                    className="w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://www.shutterstock.com/image-photo/various-cosmetic-products-containers-bottles-600w-2568529501.jpg"
                    className="w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/039/270/380/small_2x/ai-generated-a-basket-containing-cleaning-products-and-cleaning-supplies-free-photo.jpeg"
                    className="w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;