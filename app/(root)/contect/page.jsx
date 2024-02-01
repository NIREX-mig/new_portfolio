import Image from "next/image";

export default function Contect() {
  return (
    <section className="px-10 border-2 pb-32">
      <Image
        src="/assets/nirex-avatar.svg"
        alt="svg"
        width={100}
        height={100}
        className="mx-auto lg:-translate-y-16 -translate-y-14 p-5 lg:p-0 "
      />
      <div className="">
        <h3 className="text-center lg:text-3xl text-base font-[EuroStyle Normal] font-semibold">
          Thanks for taking the time to reach out. How can I help you today?
        </h3>
        <div className="lg:w-[80%] w-full mx-auto lg:p-10 py-5">
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
                  placeholder="Your name"
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
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Write your thoughts here..."
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="lg:text-xl text-lg text-primary  px-10 py-2 border border-primary rounded-full hover:text-tlight hover:bg-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
