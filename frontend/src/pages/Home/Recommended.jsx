import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksapi";

const Recommended = () => {
  const { data: books = [] } = useFetchAllBooksQuery();


  return (
    <div id="recommended" className="bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Confused? Here&apos;s What You Can Read
      </h2>
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
  );
};

export default Recommended;
