"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col  py-6 lg:px-20 px-5">
      <div className="flex justify-between">
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={110} height={110} />
        </Link>

        <div className="hidden lg:flex gap-2 justify-center items-center">
          <nav>
            <Link
              href="/resume"
              className="font-semibold pr-5 hover:text-primary hover:underline "
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
          {!darkMode ? (
            <MdLightMode
              className="cursor-pointer"
              size={30}
              onClick={() => setDarkMode(!darkMode)}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer"
              size={30}
              onClick={() => setDarkMode(!darkMode)}
            />
          )}
        </div>
        <div
          className={`flex flex-col gap-2 cursor-pointer justify-center items-end lg:hidden w-14 ${
            menuOpen && "z-10"
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
      {menuOpen && (
        <section className="absolute top-2 right-2 w-[60%] h-[70%] rounded-3xl bg-secondary bg-opacity-70"></section>
      )}
    </header>
  );
};

export default Navbar;
