"use client";

import { useContext, useEffect } from "react";
import ResumeCard from "@/Components/ResumeCard";
import globalContext from "@/context/context";
import Image from "next/image";
import Link from "next/link";
import { FaBirthdayCake, FaGraduationCap, FaMobileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { CiBag1 } from "react-icons/ci";
import { knowledges } from "@/constant";
import { TfiEmail } from "react-icons/tfi";
import { IoLocation } from "react-icons/io5";
import Progressbar from "@/Components/Progressbar";



export default function resume() {
  const { setMenuIsOpen } = useContext(globalContext);

  useEffect(() => {
    setMenuIsOpen(false);
  }, [setMenuIsOpen]);

  return (
    <section className=" lg:px-20 p-3 py-8 pb-20 dark:bg-bdark flex lg:flex-row flex-col gap-10 " >
      <div className="bg-dcard rounded-lg text-white pb-10 lg:w-[40%] w-full">
        <Image src="/img1.webp" alt="Image" width={200} height={200} className="mx-auto rounded-md mt-8 w-auto h-auto" />
        <h3 className="text-2xl text-center">Ashish Kumar</h3>
        <div className="text-center mt-3 ">
          <p className="text-sm inline text-center bg-gray-200/20 px-4 py-2 mx-3 rounded-md">
            Full Stack Devloper
          </p>
        </div>
        <div className="bg-gray-200/20 w-[85%] mx-auto mt-7 rounded-md p-6">
          <div className="mb-2 flex text-white gap-2 item-center">
            <FaMobileAlt size={30} className="bg-white p-1 fill-blue-500 rounded-md" />
            <div>
              <p className="text-xs font-medium">Phone</p>
              <h3 className="font-bold text-sm">+91 7294960140</h3>
            </div>
          </div> <hr />

          <div className="my-2 flex text-white gap-2 item-center">
            <TfiEmail size={30} className="bg-white p-1 fill-green-700 rounded-md" />
            <div>
              <p className="text-xs font-medium">Email</p>
              <h3 className="font-bold text-sm">akay93796@gmail.com</h3>
            </div>
          </div><hr />

          <div className="my-2 flex text-white gap-2 item-center">
            <IoLocation size={30} className="bg-white p-1 fill-red-700 rounded-md" />
            <div>
              <p className="text-xs font-medium">Location</p>
              <h3 className="font-bold text-sm">Bihar ,India</h3>
            </div>
          </div><hr />
          <div className="my-2 flex text-white gap-2 item-center">
            <FaBirthdayCake size={30} className="bg-white p-1 fill-purple-700 rounded-md" />
            <div>
              <p className="text-xs font-medium">BirthDay</p>
              <h3 className="font-bold text-sm">Fab 14, 2002</h3>
            </div>
          </div>
        </div>
        <Link
          href={`/resume.pdf`}
          download="resume.pdf"
          target="_blank"
          className="cursor-default"
        >
          <button
            className="bg-accent/50 flex gap-1 items-center justify-center px-4 py-2 mt-4 mx-auto rounded-lg hover:bg-accent/80 hover:-translate-y-[2px] active:transtalte-y-0"
          >
            <MdDownload size={20} />
            Download Resume
          </button>
        </Link>
      </div>

      <div className="bg-dcard rounded-lg text-white p-8 w-full ">
        <div className="">
          <h1 className="text-3xl font-semibold">Resume </h1>
          <span className="h-1 w-12 line"></span>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:h-[33rem] overflow-y-scroll mt-2">
          <div>
            <div className="flex gap-2 items-center">
              <FaGraduationCap size={30} className="fill-blue-500" />
              <p className="text-lg">Education</p>
            </div>
            <div className="[&>*:nth-child(odd)]:bg-gray-600/20 [&>*:nth-child(even)]:bg-bdark/40">
              <ResumeCard session="2020-2023" company="Bacholar of Computer Application" address="LNMU, Darbhanga, Bihar" />
              <ResumeCard session="2018-2020" company="Intermediate" address="+2 D.N High School, Panchobh" />
              <ResumeCard session="2017-2018" company="Secondary" address="+2 D.N High School, Panchobh" />
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <CiBag1 size={30} className="fill-blue-500" />
              <p className="text-lg">Experience</p>
            </div>
            <div className="[&>*:nth-child(odd)]:bg-bdark/40 [&>*:nth-child(even)]:bg-gray-600/20">
              <ResumeCard company="Fresher" />
            </div>
          </div>
          <div>
            <p className="text-lg ">Working Skills</p>
            <div className="p-3">
              <Progressbar work="Web Design" length="80%" />
              <Progressbar work="Mobile app " length="70%" />
            </div>
          </div>
          <div>
            <p className="text-lg">Knowledges</p>
            <div className="mt-2">
              {
                knowledges.map((knowledge) => {
                  return <p key={knowledge.id} className="inline-block p-2 bg-gray-200/20 m-2 rounded-md">
                    {knowledge.name}
                  </p>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
