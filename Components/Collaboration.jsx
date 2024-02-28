import Link from "next/link";
import { MdChat } from "react-icons/md";

const Collaboration = () => {
  return (
    <section className="border flex flex-col items-center px-5 dark:bg-bdark dark:border-gray-800 ">
      <h3 className="text-center pb-5 mt-20 lg:text-2xl text-lg text-gray-900 font-semibold dark:text-white ">
        Interested in collaborating with me?
      </h3>
      <p className="text-center pb-20 lg:text-lg text-sm font-semibold text-gray-800 dark:text-white">
        I&#39;m always open to discussing product design work or partnership
        opportunities.
      </p>
      <Link href="/collaboration">
        <button
          type="button"
          className=" flex gap-3 items-center mx-auto border-[3px] text-primary border-primary hover:bg-primary hover:text-tlight rounded-full px-10 py-3 lg:text-xl text-sm mb-20 dark:text-white"
        >
          <MdChat size={25} />
          Start a conversation
        </button>
      </Link>
    </section>
  );
};

export default Collaboration;
