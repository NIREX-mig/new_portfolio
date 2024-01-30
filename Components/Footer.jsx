import Link from "next/link";
import Socialcontect from "./Socialcontect";
import Image from "next/image";

const Footer = () => {
  return (
    <section className=" bg-primary flex flex-col text-tlight">
      <Socialcontect />
      <div className="flex flex-col items-center lg:w-[35%] w-[60%]  mx-auto mb-3">
        <Link href="/" className="p-8">
          <Image src="/assets/logo.png" alt="logo" width={110} height={110} className="invert" />
        </Link>
        <h3 className="text-xl p-8 text-center">
          Living, learning, & leveling up one day at a time.
        </h3>
      </div>
      <p className="text-xl text-center p-3">Email : akay93796@gmail.com</p>
      <p className="text-lg text-center">Handcrafted by me &copy; 2024</p>
    </section>
  );
};

export default Footer;
