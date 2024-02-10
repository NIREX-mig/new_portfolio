import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";

export default function resume() {
  return (
    <section className=" lg:px-20 p-3 py-8 pb-20">
      <div className="flex xl:flex-row flex-col gap-10 border shadow-lg rounded-lg">
        <Image
          src="/assets/Study.jpg"
          alt="technical knowlege"
          width={450}
          height={450}
          className=""
        />
        <div className=" flex lg:flex-row flex-col justify-between gap-5">
          <div className="border p-3">
            <div className="flex items-center lg:gap-5 gap-3">
              <div className="bg-secondary flex justify-center items-center lg:w-10 lg:h-10  w-8 h-8 p-2 rounded-full">
                <FaBookOpen size={25} className="w-5 h-5" />
              </div>
              <h3 classame="">Technical Knowledge</h3>
            </div>
            <div className="p-5">
              <ul className={"list-disc list-inside text-sm"}>
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
            <div className="flex items-center lg:gap-5 gap-3">
              <div className="bg-secondary  flex justify-center items-center lg:w-10 lg:h-10  w-8 h-8 p-2 rounded-full">
                <PiGraduationCapFill size={25} />
              </div>
              <h3 classame="">Education</h3>
            </div>
            <div className="p-5">
              <ul className={"list-disc list-inside"}>
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
