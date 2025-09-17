'use client';

import Link from "next/link";
import testimonials from "@/../public/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  const reviewUrl =
    "https://www.google.com/search?sca_esv=021f25b48a55cba3&rlz=1C1KNTJ_elGR1073GR1075&sxsrf=AE3TifPVivCbWuu2tZnIviOqJapJ-C20Nw:1758107047531&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_xgR4P6chtqLjdrK4zjdjG-QZrsj8Zn8aio5UqOyehauuSwWK3zOHmRXsUHWGfvwUSET8p0xkOgLjCkYxbAUf7dPHWD0788SZPqtR7I9cSQ0G7p3XiXvjJPgQJFbm0e0Gdav8jMXk6At095Qa6A1eVbby83b9MHrwsqvX6tQpqhLiE2bQ%3D%3D&q=%CE%A4%CE%95%CE%A7%CE%9D%CE%99%CE%9A%CE%9F+%CE%93%CE%A1%CE%91%CE%A6%CE%95%CE%99%CE%9F+-+%CE%98%CE%B1%CE%BD%CE%AC%CF%83%CE%B7%CF%82+%CE%93.+%CE%A1%CE%B1%CE%B4%CE%B1%CE%AF%CE%BF%CF%82+%CE%9A%CF%81%CE%B9%CF%84%CE%B9%CE%BA%CE%AD%CF%82&sa=X&ved=2ahUKEwjMiq6Q09-PAxWzBtsEHbCeJN0Q0bkNegQIJBAD&biw=1440&bih=791&dpr=1.5";

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
            Αφήστε κριτική
          </Link>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 10000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {testimonials.map((r, idx) => (
              <SwiperSlide key={idx} className="flex">
                <div className="bg-[#141416] border border-white/10 shadow-sm rounded-xl p-4 md:p-5 text-left flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-2">
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
                      <span className="font-bold text-white">{r.name}</span>
                      <span className="text-xs text-gray-400">{r.years}</span>
                    </div>
                    <div className="ml-auto">
                      <img
                        src="/icons/google.png"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  {/* Stars directly under name */}
                  <div className="text-yellow-400 mt-1 text-sm md:text-base">
                    {"★".repeat(r.stars)}
                  </div>

                  {/* Text directly after stars */}
                  <p className="mt-1 text-gray-200 text-sm">{r.text}</p>
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
            background: rgba(255,255,255,0.6) !important;
            opacity: 0.6;
          }
          .swiper-pagination-bullet-active {
            background: rgba(255,255,255,1) !important;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}
