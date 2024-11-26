import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="max-w-sm w-full relative">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="absolute top-2 left-2 z-10">
          <Link
            href="#"
            className="bg-gray-800 text-white text-sm px-3 py-1 rounded shadow hover:bg-gray-700"
          >
            Show Code
          </Link>
        </div>
        <div className="absolute top-2 right-2 z-10">
          <Link
            href="#"
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded shadow hover:bg-blue-700"
          >
            Live Preview
          </Link>
        </div>

        <div className="hover-slide-up relative">
          <Image
            src="/img1.webp" alt="img" width={400} height={200}
            className="w-full h-56 object-cover"
          />
          <div
            className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white flex items-center justify-center slide-up"
          >
            <p className="text-center text-sm px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus, minima, dolore officiis molestiae, perferendis nam libero veniam consequatur consequuntur magnam blanditiis iusto praesentium deserunt nobis tenetur eligendi eum sequi!
            </p>
          </div>
        </div>
      </div>
    </div>

    // <article className="relative rounded-2xl bg-dcard overflow-hidden group">

    //   <div className="relative w-full rounded-2xl">
    //     <div className="absolute bottom-2 z-20 w-full flex justify-between px-2">
    //       <Link href="#" className="bg-black/80 text-white rounded-md px-2 py-1 text-xs hover:bg-white hover:text-black font-bold">show Code</Link>
    //       <Link href="#" className=" bg-black/80 text-white rounded-md px-2 py-1 text-xs hover:bg-white hover:text-black font-bold">Live preview</Link>
    //     </div>
    //     <Image src="/img1.webp" alt="img" width={400} height={200} className="rounded-2xl w-auto h-auto" />
    //   </div>
    //   <div className="bg-black/70 text-white absolute group-hover:-translate-y-52 w-full rounded-2xl p-5 duration-300 h-full">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus, minima, dolore officiis molestiae, perferendis nam libero veniam consequatur consequuntur magnam blanditiis iusto praesentium deserunt nobis tenetur eligendi eum sequi!
    //   </div>

    // </article>
  );
};

export default Card;
