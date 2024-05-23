"use client";

import { useContext, useEffect } from "react";
import ResumeCard from "@/Components/ResumeCard";
import globalContext from "@/context/context";
import Image from "next/image";
import Link from "next/link";
import { FaBirthdayCake, FaGraduationCap, FaMobileAlt } from "react-icons/fa";
import { MdDownload, MdEmail, MdMyLocation } from "react-icons/md";
import { CiBag1 } from "react-icons/ci";
import { knowledges } from "@/constant";

export default function resume() {
  const { setMenuIsOpen } = useContext(globalContext);

  useEffect(() => {
    setMenuIsOpen(false);
  }, [setMenuIsOpen]);

  return (
    <section className=" lg:px-20 p-3 py-8 pb-20 dark:bg-bdark flex gap-10 " >
      <div className="bg-dcard rounded-lg text-white pb-10 lg:w-[40%] w-full">
        <Image src="" alt="" width={100} height={100} className="" />
        <h3 className="text-2xl font-semibold text-center">Ashish Kumar</h3>
        <div className="text-center mt-3 ">
          <p className="text-sm inline text-center bg-gray-200/20 px-4 py-2 mx-3 rounded-md">
            Full Stack Devloper
          </p>
        </div>
        <div className="bg-gray-200/20 w-[75%] mx-auto mt-7 rounded-md p-6">
          <div className="mb-2 flex text-white gap-2 item-center">
            <FaMobileAlt size={30} className="bg-white p-1 fill-blue-500 rounded-md" />
            <div>
              <p className="text-xs font-medium">Phone</p>
              <h3 className="font-bold text-sm">+91 7294960140</h3>
            </div>
          </div> <hr />

          <div className="my-2 flex text-white gap-2 item-center">
            <MdEmail size={30} className="bg-white p-1 fill-green-700 rounded-md" />
            <div>
              <p className="text-xs font-medium">Email</p>
              <h3 className="font-bold text-sm">akay93796@gmail.com</h3>
            </div>
          </div><hr />

          <div className="my-2 flex text-white gap-2 item-center">
            <MdMyLocation size={30} className="bg-white p-1 fill-red-700 rounded-md" />
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
            className="bg-accent/50 flex gap-1 items-center justify-center px-4 py-2 mt-4 mx-auto rounded-lg hover:bg-accent/80"
          >
            <MdDownload size={20} />
            Download Resume
          </button>
        </Link>
      </div>

      <div className="bg-dcard rounded-lg text-white p-8 w-full">
        <h1 className="text-3xl font-semibold">Resume </h1>

        <div className="grid lg:grid-cols-2 gap-5 lg:h-[28rem] overflow-y-scroll mt-2">
          <div>
            <div className="flex gap-2 items-center">
              <FaGraduationCap size={30} className="fill-blue-500" />
              <p className="text-lg font-semibold">Education</p>
            </div>
            <div className="[&>*:nth-child(odd)]:bg-gray-600/20 [&>*:nth-child(even)]:bg-bdark/40">
              <ResumeCard session="2020-2023" company="Bacholar of Computer Application" address="LNMU, Darbhanga, Bihar" />
              <ResumeCard session="2018-2020" company="Intermediate" address="+2 D.N High School, Panchobh" />
              <ResumeCard  session="2017-2018" company="Secondary" address="+2 D.N High School, Panchobh" />
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <CiBag1 size={30} className="fill-blue-500" />
              <p className="text-lg font-semibold">Experience</p>
            </div>
            <div className="[&>*:nth-child(odd)]:bg-bdark/40 [&>*:nth-child(even)]:bg-gray-600/20">
              <ResumeCard company="Fresher" />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold">Working Skills</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Knowledges</p>
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

      {/* <div className=" flex justify-end mb-10">
        
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 shadow-lg shadow-black/25 rounded-lg dark:bg-dcard">
        <Image
          src="/assets/Study.png"
          alt="technical knowlege"
          width={450}
          height={450}
          className=""
        />
        <div className="grid lg:grid-cols-2 grid-row-2 dark:bg-dcard">
          <div className="border p-3 dark:border-gray-700">
            <div className="flex items-center lg:gap-5 gap-3 dark:text-white">
              <div className="bg-secondary flex justify-center items-center lg:w-10 lg:h-10  w-8 h-8 p-2 rounded-full">
                <FaBookOpen size={25} className="w-5 h-5 dark:fill-black" />
              </div>
              <h3 classame="">Technical Knowledge</h3>
            </div>
            <div className="p-5 dark:bg-dcard">
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

          <div className="border p-3 dark:border-gray-700 w-full">
            <div className="flex items-center lg:gap-5 gap-3 dark:text-white">
              <div className="bg-secondary  flex justify-center items-center lg:w-10 lg:h-10  w-8 h-8 p-2 rounded-full">
                <PiGraduationCapFill size={25} className="dark:fill-black" />
              </div>
              <h3 classame="">Education</h3>
            </div>
            <div className="p-5 dark:bg-dcard ">
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
      </div> */}
    </section>
  );
}
