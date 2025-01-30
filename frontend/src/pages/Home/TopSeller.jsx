import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksapi";

const TopSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose genre");
  const categories = [
    "Choose genre",
    "Business",
    "Fiction",
    "Horror",
    "Adventure",
  ];

  const { data: books = [] } = useFetchAllBooksQuery;

  const filteredBooks =
    selectedCategory === "Choose genre"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Top Sellers
      </h2>

      {/* Filter */}
      <div className="mb-10 flex justify-center">
        <select
          name="category"
          id="category"
          className="border border-gray-300 bg-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 shadow-md text-gray-700"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="px-6"
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-600">No books available.</p>
        )}
      </Swiper>
    </div>
  );
};

export default TopSeller;
