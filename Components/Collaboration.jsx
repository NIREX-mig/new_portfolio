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
          className="border-primary border-2 appearance-none cursor-pointer leading-normal outline-none text-center no-underline select-none touch-manipulation will-change-transform px-10 py-2 text-xl text-black rounded-full tg disabled:pointer-events-none hover:bg-primary hover:shadow-md hover:-translate-y-[2px] active:translate-y-0 active:shadow-none  lg:text-xl hover:text-tlight dark:text-white flex gap-2 items-center mb-20"
        >
          <MdChat size={25} />
          Start a conversation
        </button>
      </Link>
    </section>
  );
};

export default Collaboration;
