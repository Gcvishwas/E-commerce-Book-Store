import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse justify-between items-center gap-12 px-6 md:px-12 py-10 md:py-16 bg-gradient-to-r">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center md:justify-end">
        <img
          src={bannerImg}
          alt="Books Banner"
          className="rounded-lg s transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Content Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="md:text-5xl text-3xl font-bold text-indigo-800 mb-6 leading-snug">
          Discover New Reads This Week
        </h1>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Refresh your bookshelf with this week’s top releases! Whether you’re
          into thrilling mysteries or heartfelt memoirs, there’s something for
          every reader.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
