import Image from "next/image";
import aboutImg from "@/public/assets/aboutme.svg"

const AboutSelf = () => {
  return (
    <section className="bg-primary lg:pb-36 py-24 ">
      <div className=" mb-20 w-full">
        <div className=" w-[90%] mx-auto flex items-center gap-5">
          <Image src={aboutImg} alt="img" width={400} height={100} data-aos="fade-right" />
          <div>
            <h4 className=" lg:text-5xl text-2xl font-[EuroStyle Normal] text-center text-tlight pb-10" data-aos="zoom-in">
              Hi, I&#39;m Ashish. Nice to meet you.
            </h4>
            <h4 className="capitalize lg:text-lg text-base text-center text-tlight pb-20" data-aos="zoom-in" >
              I&#39;m  MERN Stack Developer with a passion for crafting innovative solutions in dynamic environments. My passion for technology and constant eagerness to learn have driven me to explore various projects and initiatives. I am an enthusiastic learner who is always open to new ideas and technologies.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSelf;
