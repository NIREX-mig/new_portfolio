import Link from "next/link";
import Card from "./Card";

const Topproject = () => {
  return (
    <seciton className=" flex flex-col items-center border dark:border-gray-800 lg:py-20 py-16 dark:bg-bdark">
      <h3 className="capitalize lg:text-4xl text-2xl font-bold text-center font-[EuroStyle Normal] pb-4 line dark:text-white">
        my projects
      </h3>
      <p className="lg:text-xl text-base text-center text-gray-700 pb-10 px-5 dark:text-white">
        Here are a few past design projects I&#39;ve worked on.
      </p>
      <div className="p-2 lg:w-[95%] w-[98%] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 jc">
        <Card />
        <Card />
        <Card />
      </div>
      <Link href="/projects" className="pt-10">
        <button
          type="button"
          className="border-primary border-2 appearance-none cursor-pointer inline-block leading-normal outline-none text-center no-underline select-none touch-manipulation will-change-transform px-10 py-2 text-xl text-black rounded-full tg disabled:pointer-events-none hover:bg-primary hover:shadow-md hover:-translate-y-[2px] active:translate-y-0 active:shadow-none  lg:text-xl hover:text-tlight dark:text-white  "
        >
          show more
        </button>
      </Link>
    </seciton>
  );
};

export default Topproject;
