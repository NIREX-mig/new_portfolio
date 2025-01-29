import Link from "next/link";
import Socialcontect from "./Socialcontect";
import Image from "next/image";

const Footer = () => {
  return (
    <section className=" bg-primary flex flex-col text-tlight">
      <Socialcontect />
      <p className="lg:text-xl text-sm text-center p-3">
        <span>Email : </span>
        <span className="underline">akay93796@gmail.com</span>
      </p>
      <p className="lg:text-lg text-sm text-center">Handcrafted by me &copy; 2024</p>
    </section>
  );
};

export default Footer;
