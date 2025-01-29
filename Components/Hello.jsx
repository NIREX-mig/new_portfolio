import Image from "next/image";

const Hello = () => {
  return (
    <section className=" felx text-center dark:bg-bdark dark:text-white">
      <div className="py-24 px-5">
        <h1 className="capitalize lg:text-5xl text-2xl text-gray-900 font-bold font-[EuroStyle Normal] pb-8 dark:text-white " data-aos="fade-down">
          frontend devloper & MERN stack devloper
        </h1>
        <p className="lg:text-2xl text-lg capitalize">
          I design and code beautifully simple things, and I love what I do.
        </p>

        <Image
          src="/assets/nirex-avatar.svg"
          alt="svg"
          width={250}
          height={250}
          className="mx-auto lg:pt-24 p-12 lg:p-0"
          data-aos="fade-up"
        />
      </div>
    </section>
  );
};

export default Hello;
