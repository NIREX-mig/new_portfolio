import { techStacks } from "@/constant";
import Image from "next/image";

const Techstack = () => {
  return (
    <section className="dark:bg-bdark bg-white">
      <section className="bg-white shadow w-[85%]  mx-auto rounded-2xl -translate-y-36 bg-blight lg:p-16 lg:py-16 py-10 lg:px-10 px-7 dark:bg-dcard">
        <section className="dark:bg-dcard">
          <h3 className="capitalize lg:text-3xl text-2xl font-bold font-[EuroStyle Normal] pb-2 line dark:text-white" data-aos="fade-down">
            tech stack
          </h3>
          <p className="lg:text-lg text-base  pb-8 dark:text-white">
            Technologies I&#39;ve been working with recently
          </p>
          <div className="grid lg:grid-cols-8 grid-cols-2 gap-5 justify-between">
            {techStacks?.map((techstack, i) => {
              return (
                <div key={i}>
                  <div className=" bg-white w-12 h-12 rounded-full flex justify-center items-center p-3" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <Image
                      src={techstack.src}
                      alt={techstack.alt}
                      width={techstack.width}
                      height={techstack.height}
                    />
                  </div>
                  <p className="mt-2 dark:text-white">{techstack.lable}</p>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Techstack;
