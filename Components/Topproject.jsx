import Link from "next/link";
import Card from "./Card";

const Topproject = () => {
  return (
    <seciton className=" flex flex-col items-center border dark:border-gray-800 lg:py-20 py-16 dark:bg-bdark">
      <h3 className="capitalize lg:text-4xl text-2xl font-bold text-center font-[EuroStyle Normal] pb-4 line dark:text-white text-black" data-aos="fade-down">
        my projects
      </h3>
      <p className="lg:text-xl text-base text-center text-gray-700 pb-10 px-5 dark:text-white">
        Here are a few past design projects I&#39;ve worked on.
      </p>
      <div className="p-2 lg:w-[95%] w-[98%] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 jc">
        <Card category="web-app" lable="Demo app" thumbnail="/img1.webp" />
        <Card category="web-app" lable="Demo app" thumbnail="/img1.webp" />
        <Card category="web-app" lable="Demo app" thumbnail="/img1.webp" />
      </div>
      <Link href="/projects" className="pt-10">
        <button
          type="button"
          className=" cursor-pointer text-center px-10 py-3 text-xl text-white rounded-lg bg-primary lg:text-xl tracking-wide hover:bg-white hover:text-black"
        >
          Show More
        </button>
      </Link>
    </seciton>
  );
};

export default Topproject;
