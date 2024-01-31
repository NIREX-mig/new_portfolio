import { techStacks, techtools } from "@/constant";
import Image from "next/image";

const Techstack = () => {
  return (
    <section className="shadow w-[85%]  mx-auto rounded-2xl -translate-y-36 bg-blight lg:p-16 lg:py-16 py-10 lg:px-10 px-7 ">
      <section >
        <h3 className="capitalize lg:text-3xl text-2xl font-bold font-[EuroStyle Normal] pb-2 line">
          tech stack
        </h3>
        <p className="lg:text-lg text-base text-gray-700 pb-8">Technologies I&#39;ve been working with recently</p>
        <div className="flex gap-5 flex-wrap">
          {techStacks?.map((techstack,i)=>{
            return(
              <Image key={i} src={techstack.src} alt={techstack.alt} width={100} height={100} className="p-3 "/>
            )
          })}
        </div>
      </section>
      <section className="pt-8">
        <h3 className="capitalize lg:text-3xl text-2xl font-bold font-[EuroStyle Normal] pb-2 line">
         Dev Tools
        </h3>
        <p className="lg:text-lg text-base text-gray-700 pb-8">Tools are used in working.</p>
        <div className="flex gap-5 flex-wrap">
          {techtools?.map((techstack,i)=>{
            return(
              <Image key={i} src={techstack.src} alt={techstack.alt} width={100} height={100} className="p-3 "/>
            )
          })}
        </div>
      </section>
    </section>
  );
};

export default Techstack;
