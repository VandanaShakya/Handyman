// Reviews.jsx
import React, { useState, useEffect } from "react";
import { reviewsData } from "./mainPagesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Reviews = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full flex flex-col justify-center items-center h-48">
        <div className="w-12 h-12 border-4 border-t-[#A55018] border-gray-300 rounded-full animate-spin" />
        <p className="mt-4 text-[#A55018] text-lg font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative bg-[#404040] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#A55018] mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#CACCCF]">
            We take pride in delivering high-quality handyman services with honesty and reliability. See what our satisfied customers have to say about their experience with HandyPro Experts.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 18 },
          }}
        >
          {reviewsData.concat(reviewsData).map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#6b6b6b] p-5 rounded-lg shadow-lg min-h-[220px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {review.reviewerName?.charAt(0) || "U"}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{review.reviewerName}</h3>
                      <p className="text-sm text-gray-300">{review.timePosted}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="flex space-x-1">
                      {String(review.rating || "")
                        .split("")
                        .map((star, i) => (
                          <span key={i} className="text-yellow-400 text-xl leading-none">
                            {star}
                          </span>
                        ))}
                    </span>
                    <span className="ml-2 text-gray-300 text-sm">({review.reviewsCount} reviews)</span>
                  </div>

                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{review.reviewText}</p>
                </div>

              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
