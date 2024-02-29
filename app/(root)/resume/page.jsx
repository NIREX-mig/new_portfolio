"use client";

import globalContext from "@/context/context";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { FaBookOpen } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";

export default function resume() {
  const { setMenuIsOpen } = useContext(globalContext);

  useEffect(() => {
    setMenuIsOpen(false);
  },[setMenuIsOpen]);
  
  return (
    <section className=" lg:px-20 p-3 py-8 pb-20 dark:bg-bdark">
      <div className="flex xl:flex-row flex-col shadow-lg rounded-lg dark:bg-bdark">
        <Image
          src="/assets/Study.png"
          alt="technical knowlege"
          width={450}
          height={450}
          className=""
        />
        <div className="grid lg:grid-cols-2 grid-row-2 dark:bg-bdark">
          <div className="border p-3 dark:border-gray-700">
            <div className="flex items-center lg:gap-5 gap-3 dark:text-white">
              <div className="bg-secondary flex justify-center items-center lg:w-10 lg:h-10  w-8 h-8 p-2 rounded-full">
                <FaBookOpen size={25} className="w-5 h-5 dark:fill-black" />
              </div>
              <h3 classame="">Technical Knowledge</h3>
            </div>
            <div className="p-5 dark:bg-bdark">
              <ul className={"list-disc list-inside text-sm dark:text-white"}>
                <li>Operating System</li>
                <li>Data Structure Using Java</li>
                <li>Database Management System</li>
                <li>Computer Networks</li>
                <li>MERN Stack</li>
                <li>HTML, CSS, Javascript, Java</li>
                <li>Android App Using React Native</li>
              </ul>
            </div>
          </div>

          <div className="border p-3 dark:border-gray-700">
            <div className="flex items-center lg:gap-5 gap-3 dark:text-white">
              <div className="bg-secondary  flex justify-center items-center lg:w-10 lg:h-10  w-8 h-8 p-2 rounded-full">
                <PiGraduationCapFill size={25} className="dark:fill-black" />
              </div>
              <h3 classame="">Education</h3>
            </div>
            <div className="p-5 dark:bg-bdark ">
              <ul className={"list-disc list-inside text-sm dark:text-white"}>
                <li>Bacholar of Computer Applications</li>
                <p className="pt-2 px-6">C.M College,Darbhanga</p>
                <p className="px-6">Lalit Narayan Mithila University</p>
                <li className="pt-3">10th and 12th</li>
                <p className="pt-2 px-6">+2 Dev Narayan High School,Panchobh</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
