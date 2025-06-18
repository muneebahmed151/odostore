import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const categories = [
  { label: 'HeadPhone', img: '/images/headphone.jpg' },
  { label: 'Wireless Chargere', img: '/images/wireless.jpg' },
  { label: 'Cc-type', img: '/images/c-type.jpg' },
];

const CategorySection = () => {
  return (
    <section className="w-screen h-screen m-0 p-0">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="w-full h-full"
      >
        {categories.map(({ label, img }) => (
          <SwiperSlide key={label}>
            <div className="relative w-full h-screen">
              <img
                src={img}
                alt={label}
                className="w-full h-full object-cover"
              />
              <h2 className="absolute bottom-4 left-4 text-white text-3xl font-bold px-3 py-2 rounded">
                {label}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySection;
