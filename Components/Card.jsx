import Image from "next/image";

const Card = () => {
  return (
    <div className="max-w-sm w-full relative" data-aos="zoom-in">
      <div className="bg-bdark rounded-lg shadow-lg overflow-hidden">
        <div className="w-full">

          <Image
            src="/img1.webp" alt="img" width={400} height={200}
            className="w-full h-56 object-cover" />

          <div className="w-[80%] mx-auto bg-white rounded-lg p-4 -translate-y-[40%] flex flex-col gap-2">
            <span className="text-sm">Category</span>
            <span className="text-lg underline underline-offset-2">Project Name</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
