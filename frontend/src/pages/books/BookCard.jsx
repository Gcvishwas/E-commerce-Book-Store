import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <div className="rounded-lg transition-shadow duration-300 shadow-lg bg-white p-6 hover:shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Book Image */} <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <Link to={`/books/${book._id}`}>
                        <img src={`${getImgUrl(book.coverImage)}`} alt={book.title} className=
                            "w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200" />
                    </Link>
                </div>

                <div className="flex flex-col sm:w-2/3">
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 mb-3">
                            {book?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">
                        {book?.description.length > 80
                            ? `${book?.description.slice(0, 80)}...`
                            : book?.description}
                    </p>
                    <p className="text-lg font-medium text-gray-800 mb-4">
                        ${book?.newPrice}
                        {book?.oldPrice && (
                            <span className="ml-2 text-sm text-gray-500 line-through">${book?.oldPrice}</span>
                        )}
                    </p>
                    <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-indigo-600">
                        <FaShoppingCart />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;