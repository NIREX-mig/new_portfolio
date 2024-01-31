import Image from "next/image";

export default function Collaboration() {
  return (
    <section className="px-10 border-2 pb-32">
      <Image
        src="/assets/nirex-avatar.svg"
        alt="svg"
        width={100}
        height={100}
        className="mx-auto -translate-y-16 "
      />
      <div className="">
        <h3 className="text-center xl:text-3xl text-lg font-[EuroStyle Normal] ">
          want to descuss a startup collaboration? I&#39;m most definitely game.
        </h3>
        <div className="w-[80%] mx-auto p-10">
          <form >
            <div className="grid gap-6 py-10 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="example@company.com"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-xl font-semibold text-primary  px-10 py-2 border border-primary rounded-full hover:text-tlight hover:bg-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
