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
      <div className="p-2 flex flex-wrap lg:w-[95%] w-[98%] gap-5 justify-center mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Link href="#" className="pt-10">
        <button
          type="button"
          className="capitalize border-[3px] rounded-full py-4 px-10 lg:text-xl text-lg border-primary mx-auto text-primary hover:bg-primary hover:text-tlight  dark:text-white "
        >
          show more
        </button>
      </Link>
    </seciton>
  );
};

export default Topproject;
