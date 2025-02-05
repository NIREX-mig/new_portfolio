"use client";
import globalContext from "@/context/context";
import Image from "next/image";
import { useContext } from "react";

const Card = ({ data }) => {

  const { setModelIsOpen, setModelData } = useContext(globalContext);

  const handleOnClick = () => {
    setModelIsOpen(true);
    setModelData(data);
  }

  return (
    <div className="max-w-sm w-full relative" data-aos="zoom-in">
      <div className="bg-bdark rounded-lg shadow-lg overflow-hidden">
        <div className="w-full" >
          <Image
            src={data?.thumbnail} alt="img" width={400} height={200}
            onClick={handleOnClick}
            className="w-full h-56 object-cover" />

          <div className="w-[80%] mx-auto bg-white rounded-lg p-4 -translate-y-[40%] flex flex-col gap-2">
            <span className="text-sm">{data?.category}</span>
            <span className="text-lg underline underline-offset-2">{data?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
