import React from 'react'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookCard from "../books/BookCard";

const Recommended = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch("books.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div className="bg-gray-100 py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Confused? Here's What You Can Read
            </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="px-6"
            >
                {books.length > 0 ? (
                    books.slice(8, 15).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No books available.</p>
                )}
            </Swiper>
        </div>

    )
}

export default Recommended
