import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Socialcontect = () => {
  return (
    <section className="lg:w-[80%] w-[90%] bg-[#040d31] text-tlight flex md:flex-row flex-col items-center justify-around rounded-xl p-10 mx-auto mt-100 -translate-y-16 ">
      <h2 className="lg:text-2xl text-xl font-[EuroStyle Normal] font-bold capitalize m-5" data-aos="fade-right">
        follow me here also
      </h2>
      <div className="lg:text-lg text-base lg:w-[30%]  m-5" data-aos="zoom-in">
        <p>Interested in working together? Follow me also here </p>
      </div>
      <div className="flex gap-5 m-5" data-aos="fade-left">
        <Link
          href="https://www.instagram.com/nirex_akay/"
          target="_blank"
          className=" group border-[3px] border-secondary p-3 rounded-full hover:bg-secondary"
        >
          <FaInstagram size={30} className="group-hover:fill-red-500 " />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ashish-kumar-a82985220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className=" group border-[3px] border-secondary p-3 rounded-full hover:bg-secondary"
        >
          <FaLinkedin size={30} className="group-hover:fill-blue-900 " />
        </Link>
        <Link
          href="https://github.com/NIREX-mig"
          target="_blank"
          className=" group border-[3px] border-secondary p-3 rounded-full hover:bg-secondary"
        >
          <FaGithub size={30} className="group-hover:fill-black " />
        </Link>
      </div>
    </section>
  );
};

export default Socialcontect;
