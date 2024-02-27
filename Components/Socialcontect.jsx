import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Socialcontect = () => {
  return (
    <section className="lg:w-[80%] w-[90%] bg-[#141c3a] text-tlight flex md:flex-row flex-col items-center justify-around rounded-xl p-10 mx-auto mt-100 -translate-y-16 ">
      <h2 className="lg:text-2xl text-xl font-[EuroStyle Normal] font-bold capitalize m-5">
        follow me here also
      </h2>
      <div className="lg:text-lg text-base lg:w-[30%]  m-5">
        <p>Interested in working together? Follow me also here </p>
      </div>
      <div className="flex gap-5 m-5">
        <Link href="#" className=" group border-[3px] border-secondary p-3 rounded-full hover:bg-secondary" >
          <FaInstagram size={30} className="group-hover:fill-red-500 " />
        </Link>
        <Link href="#" className=" group border-[3px] border-secondary p-3 rounded-full hover:bg-secondary" >
          <FaLinkedin size={30} className="group-hover:fill-blue-900 " />
        </Link>
        <Link href="#" className=" group border-[3px] border-secondary p-3 rounded-full hover:bg-secondary"  >
          <FaGithub size={30} className="group-hover:fill-black " />
        </Link>
      </div>
    </section>
  );
};

export default Socialcontect;
