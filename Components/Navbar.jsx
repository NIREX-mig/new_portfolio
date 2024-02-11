"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mode ,setMode] = useState("light")
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    darkMode ? setMode("light") : setMode("dark");

    if (window.matchMedia(`(prefers-color-scheme: ${mode})`).matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="flex flex-col  py-6 lg:px-20 px-5 dark:bg-black">
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
        {!darkMode ? (
          <MdLightMode
            className="cursor-pointer"
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
            menuOpen && "z-[101]"
          } `}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`bg-black ${
              menuOpen ? "w-[80%]" : "w-full"
            } h-1 rounded-full ${
              menuOpen && "rotate-45 translate-y-2 duration-300"
            } duration-300`}
          ></span>
          <span
            className={`bg-black w-[80%] h-1 rounded-full ${
              menuOpen && "-rotate-45 -translate-y-1 duration-300"
            } duration-300`}
          ></span>
        </div>
        </div>
      </div>
      {menuOpen && (
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
