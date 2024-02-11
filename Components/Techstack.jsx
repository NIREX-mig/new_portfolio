import { techStacks, techtools } from "@/constant";
import Image from "next/image";

const Techstack = () => {
  return (
    <section className="dark:bg-black">
      <section className="shadow w-[85%]  mx-auto rounded-2xl -translate-y-36 bg-blight lg:p-16 lg:py-16 py-10 lg:px-10 px-7 dark:bg-black">
        <section className="dark:bg-black">
          <h3 className="capitalize lg:text-3xl text-2xl font-bold font-[EuroStyle Normal] pb-2 line dark:text-white">
            tech stack
          </h3>
          <p className="lg:text-lg text-base text-gray-700 pb-8 dark:text-white">
            Technologies I&#39;ve been working with recently
          </p>
          <div className="flex gap-5 flex-wrap dark:bg-black">
            {techStacks?.map((techstack, i) => {
              return (
                <Image
                  key={i}
                  src={techstack.src}
                  alt={techstack.alt}
                  width={100}
                  height={100}
                  className="p-3 "
                />
              );
            })}
          </div>
        </section>
        <section className="pt-8 dark:bg-black">
          <h3 className="capitalize lg:text-3xl text-2xl font-bold font-[EuroStyle Normal] pb-2 line dark:text-white">
            Dev Tools
          </h3>
          <p className="lg:text-lg text-base text-gray-700 pb-8 dark:text-white">
            Tools are used in working.
          </p>
          <div className="flex gap-5 flex-wrap dark:bg-black">
            {techtools?.map((techstack, i) => {
              return (
                <Image
                  key={i}
                  src={techstack.src}
                  alt={techstack.alt}
                  width={100}
                  height={100}
                  className="p-3 "
                />
              );
            })}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Techstack;
