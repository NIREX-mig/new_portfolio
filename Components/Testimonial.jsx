import Image from "next/image";
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
        <swiper-container className="mySwiper" pagination="true">
          <swiper-slide>
            <Image
              src="/assets/nirex-avatar.svg"
              alt="svg"
              width={100}
              height={100}
              className=""
            />
            <p className=" lg:text-xl text-sm p-5">
              “Nirex was a real pleasure to work with and we look forward to
              working with him again. He&#39;s definitely the kind of designer
              you can trust with a project from start to finish.”
            </p>
            <div className="flex flex-col justify-center items-center">
              <h3 className="lg:text-xl text-lg font-bold">Pascal Tremblay</h3>
              <p className="text-sm">Nyrex devloper</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <Image
              src="/assets/nirex-avatar.svg"
              alt="svg"
              width={100}
              height={100}
              className=""
            />
            <p className="p-5 lg:text-xl text-sm">
              “Nirex was a real pleasure to work with and we look forward to
              working with him again. He&#39;s definitely the kind of designer
              you can trust with a project from start to finish.”
            </p>
            <div className="flex flex-col justify-center items-center">
              <h3 className="lg:text-xl text-lg font-bold">Pascal Tremblay</h3>
              <p className="text-sm">Nyrex devloper</p>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
};

export default Testimonial;
