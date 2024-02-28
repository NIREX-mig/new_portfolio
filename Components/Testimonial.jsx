"use client";
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



const Testimonial = () => {


  return (
    <section className="border py-36 dark:bg-bdark dark:border-gray-800">
      <h3 className="lg:text-4xl text-xl font-bold font-[EuroStyle Normal] text-center pb-4 dark:text-white">
        Testimonials
      </h3>
      <p className="lg:text-xl text-sm text-center text-gray-700 pb-10 px-10 dark:text-white">
        People I&#39;ve worked with have said some nice things...
      </p>
      <div className="w-full lg:w-[75%] mx-auto dark:bg-bdark">
        <Swiper
          className="lg:w-[85%] w-[95%] dark:bg-bdark"
          modules={[ Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="p-10">
            <Image
              src="/assets/nirex-avatar.svg"
              alt="svg"
              width={100}
              height={100}
              className="mx-auto mb-5"
            />
            <p className=" lg:text-xl text-sm p-5 dark:text-white text-center ">
              “Nirex was a real pleasure to work with and we look forward to
              working with him again. He&#39;s definitely the kind of designer
              you can trust with a project from start to finish.”
            </p>
            <div className="flex flex-col justify-center items-center">
              <h3 className="lg:text-xl text-lg font-bold dark:text-white">Pascal Tremblay</h3>
              <p className="text-sm dark:text-white" >Nyrex devloper</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10">
            <Image
              src="/assets/nirex-avatar.svg"
              alt="svg"
              width={100}
              height={100}
              className="mx-auto mb-5"
            />
            <p className=" lg:text-xl text-sm p-5 dark:text-white text-center ">
              “Nirex was a real pleasure to work with and we look forward to
              working with him again. He&#39;s definitely the kind of designer
              you can trust with a project from start to finish.”
            </p>
            <div className="flex flex-col justify-center items-center">
              <h3 className="lg:text-xl text-lg font-bold dark:text-white">Pascal Tremblay</h3>
              <p className="text-sm dark:text-white" >Nyrex devloper</p>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
