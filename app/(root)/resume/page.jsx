import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";

export default function resume() {
  return (
    <section className=" lg:px-20 p-3 py-8 pb-20 dark:bg-black">
      <button type="button" className="capitalize border-[3px] rounded-full py-4 px-10 lg:text-xl text-lg border-primary mx-auto text-primary hover:bg-primary hover:text-tlight ">
    <a href="/assests/Study.jpg" download> download </a>
      </button>
      <div className="flex xl:flex-row flex-col gap-10 border shadow-lg rounded-lg dark:bg-black">
        <Image
          src="/assets/Study.jpg"
          alt="technical knowlege"
          width={450}
          height={450}
          className=""
        />
        <div className=" flex lg:flex-row flex-col justify-between dark:bg-black">
          <div className="border p-3">
            <div className="flex items-center lg:gap-5 gap-3 dark:text-white">
              <div className="bg-secondary flex justify-center items-center lg:w-10 lg:h-10  w-8 h-8 p-2 rounded-full">
                <FaBookOpen size={25} className="w-5 h-5 dark:fill-black" />
              </div>
              <h3 classame="">Technical Knowledge</h3>
            </div>
            <div className="p-5 dark:bg-black">
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

          <div className="border p-3">
            <div className="flex items-center lg:gap-5 gap-3 dark:text-white">
              <div className="bg-secondary  flex justify-center items-center lg:w-10 lg:h-10  w-8 h-8 p-2 rounded-full">
                <PiGraduationCapFill size={25} className="dark:fill-black"/>
              </div>
              <h3 classame="">Education</h3>
            </div>
            <div className="p-5 dark:bg-blac ">
              <ul className={"list-disc list-inside text-sm dark:text-white" }>
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
