'use client';

import Link from "next/link";
import testimonials from "../../../../public/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  const reviewUrl =
    "https://www.google.gr/maps/place/%CE%A4%CE%95%CE%A7%CE%9D%CE%99%CE%9A%CE%9F+%CE%93%CE%A1%CE%91%CE%A6%CE%95%CE%99%CE%9F+-+%CE%98%CE%B1%CE%BD%CE%AC%CF%83%CE%B7%CF%82+%CE%93.+%CE%A1%CE%B1%CE%B4%CE%B1%CE%AF%CE%BF%CF%82/@38.0090796,23.6932771,864m/data=!3m1!1e3!4m8!3m7!1s0x14a1a3b09e2f49df:0x67a12e8301f2d17a!8m2!3d38.0090754!4d23.695852!9m1!1b1!16s%2Fg%2F11ss8g7zsr?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="relative bg-cover bg-center px-4 flex justify-center items-center py-12 sm:py-16 md:py-20">
      {/* Content */}
      <div className="z-10 w-full">
        {/* Section Title + CTA */}
        <div className="max-w-6xl px-2 sm:px-4 mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="title-black text-left text-white">
              Τι λένε για το γραφείο μας
            </h2>
            <p className="text-gray-300 mt-2 max-w-xl text-left">
              Μερικά λόγια για τη δουλειά και τη συνέπειά μας από ανθρώπους που μας εμπιστεύτηκαν
            </p>
          </div>

          <Link
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-1 sm:mt-0"
          >
            Όλες οι κριτικές
          </Link>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{clickable: true}}
            loop={true}
            autoplay={{delay: 10000}}
            breakpoints={{
              640: {slidesPerView: 1},
              768: {slidesPerView: 2, spaceBetween: 20},
              1024: {slidesPerView: 3, spaceBetween: 24},
            }}
          >
            {testimonials.map((r, idx) => (
              <SwiperSlide key={idx} className="flex">
                {/* Card with constant height */}
                <div className="bg-[#141416] shadow rounded-xl p-4 md:p-5 text-left flex flex-col flex-1 h-64 md:h-72">
                  {/* Header (fixed) */}
                  <div className="flex items-center gap-2 shrink-0">
                    {r.avatar ? (
                      <img
                        src={r.avatar}
                        alt={r.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 ${r.color} text-white flex items-center justify-center rounded-full font-bold`}
                      >
                        {r.initial}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="font-bold">{r.name}</span>
                      <span className="text-xs">{r.years}</span>
                    </div>
                    <div className="ml-auto">
                      <img src="/icons/google.png" alt="Google" className="w-5 h-5"/>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="text-yellow-400 text-sm md:text-base leading-none mt-2 shrink-0">
                    {"★".repeat(r.stars || 5)}
                  </div>

                  {/* Review */}
                  <div className="mt-2 text-sm leading-relaxed flex-1 overflow-y-auto pr-1 review-scroll">
                    {r.text}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>
        {`
          .swiper-slide {
            display: flex;
            height: auto;
          }
          .swiper-pagination {
            position: relative !important;
            margin-top: 1.5rem;
          }
          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.4;
          }
          .swiper-pagination-bullet-active {
            background: white !important;
            opacity: 1;
          }

          /* White scrollbar */
          .review-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .review-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .review-scroll::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 9999px;
          }
          .review-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.8);
          }

          /* For Firefox */
          .review-scroll {
            scrollbar-width: thin;
            scrollbar-color: rgba(255,255,255,0.6) transparent;
          }
        `}
      </style>

    </div>
  );
}
