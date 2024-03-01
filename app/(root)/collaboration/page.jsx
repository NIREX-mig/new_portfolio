"use client";

import Image from "next/image";
import globalContext from "@/context/context";
import { useContext,useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function Collaboration() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { setMenuIsOpen } = useContext(globalContext);

  useEffect(() => {
    setMenuIsOpen(false);
  }, [setMenuIsOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/collaboration`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      }
    );
    const data = await res.json();

    if (data.success) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFormData({ name: "", email: "", message: "" });
    }
    else {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="px-10 pb-32 dark:bg-bdark">
      <Image
        src="/assets/nirex-avatar.svg"
        alt="svg"
        width={100}
        height={100}
        className="mx-auto lg:-translate-y-16 -translate-y-14 p-5 lg:p-0 "
      />
      <div className="">
        <h3 className="text-center lg:text-3xl text-base font-[EuroStyle Normal] dark:text-white ">
          want to descuss a startup collaboration? I&#39;m most definitely game.
        </h3>
        <div className="lg:w-[80%] w-full mx-auto lg:p-10 py-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 py-10 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:text-white"
                  placeholder="Name"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:text-white"
                  placeholder="example@company.com"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white"
                  placeholder="Write your thoughts here..."
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="lg:text-xl text-lg text-primary  px-10 py-2 border border-primary rounded-full hover:text-tlight hover:bg-primary dark:text-white shadow-lg shadow-gray-400 dark:shadow-gray-600 dark:hover:shadow-primary/70 hover:shadow-60"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
