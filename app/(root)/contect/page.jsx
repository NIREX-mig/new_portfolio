import Image from "next/image";

export default function Contect() {
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
        <h3 className="text-center xl:text-3xl text-lg font-[EuroStyle Normal] font-semibold">
          Thanks for taking the time to reach out. How can I help you today?
        </h3>
        <div className="w-[80%] mx-auto p-10">
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
