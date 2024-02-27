"use client";

// import Globalstate from "@/context/State";
import globalContext from "@/context/context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const context = useContext(globalContext);
  const {menuIsOpen, setMenuIsOpen} = context;
  
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    darkMode ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
  }

  return (
    <header className="flex flex-col border-b border-gray-200  py-6 lg:px-20 px-5 dark:bg-black dark:border-b-[1px] dark:border-gray-800">
      <div className="flex justify-between dark:bg-black">
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={90} height={90} priority className="dark:invert"/>
        </Link>

        <div className="flex gap-2 items-center dark:bg-black">
          <div className="hidden lg:flex gap-2 justify-center items-center">
            <nav>
              <Link
                href="/resume"
                className="font-semibold pr-5 hover:text-primary hover:underline dark:text-white "
              >
                Resume
              </Link>
            </nav>
            <nav>
              <Link href="/contect">
                <button
                  type="button"
                  className="border-[3px]  capitalize text-xl border-primary text-primary rounded-full px-4 py-2 hover:bg-primary hover:text-tlight"
                >
                  say hello
                </button>
              </Link>
            </nav>
          </div>
        {darkMode ? (
          <MdLightMode
            className="cursor-pointer dark:fill-white"
            size={30}
            onClick={handleDarkMode}
          />
        ) : (
          <MdDarkMode
            className="cursor-pointer"
            size={30}
            onClick={handleDarkMode}
          />
        )}
        <div
          className={`flex flex-col gap-2 cursor-pointer justify-center items-end lg:hidden w-14 h-12 p-2 ${
            menuIsOpen && "z-[101]"
          } `}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <span
            className={`bg-black ${
              menuIsOpen ? "w-[80%]" : "w-full"
            } h-1 rounded-full ${
              menuIsOpen && "rotate-45 translate-y-2 duration-300"
            } duration-300 dark:bg-white`}
          ></span>
          <span
            className={`bg-black w-[80%] h-1 rounded-full ${
              menuIsOpen && "-rotate-45 -translate-y-1 duration-300"
            } duration-300 dark:bg-white`}
          ></span>
        </div>
        </div>
      </div>
      {menuIsOpen && (
        <section className="absolute lg:hidden top-5 right-4 w-[90%] h-[200px] z-[100] rounded-xl  backdrop-blur-lg bg-accent/40">
          <div className="w-full mt-14 p-5 flex flex-col justify-center items-center border-t-[1px] border-gray-200">
            <nav className="py-2">
              <Link
                href="/resume"
                className="font-semibold pr-5 hover:text-primary hover:underline "
              >
                Resume
              </Link>
            </nav>
            <nav className="py-2">
              <Link href="/contect">
                <button
                  type="button"
                  className="border-[2px]  capitalize text-lg border-primary text-primary rounded-full px-2 py-1 hover:bg-primary hover:text-tlight"
                >
                  say hello
                </button>
              </Link>
            </nav>
          </div>
        </section>
      )}
    </header>
  );
};

export default Navbar;
