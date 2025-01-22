import React, { useEffect, useState } from 'react';

const TopSeller = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setselectedCategory] = useState("Choose genre");
    const categories = ["Choose genre", "Business", "Fiction", "Horror", "Adventure"];

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then((data) => setBooks(data));
    }, []); // Add dependency array to run only once

    // Filter books based on selected category
    const filteredBooks = selectedCategory === "Choose genre"
        ? books
        : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>

            {/* Filter */}
            <div className='mb-8 flex items-center'>
                <select
                    name="category"
                    id="category"
                    className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'
                    value={selectedCategory}
                    onChange={(e) => setselectedCategory(e.target.value)} // Update selectedCategory on change
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Book Listing */}
            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index} className='mb-4'>
                        <h3 className='text-xl font-medium'>{book.title}</h3>
                        <p className='text-gray-600'>Category: {book.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopSeller;
