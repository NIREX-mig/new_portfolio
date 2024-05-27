import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <article className="relative rounded-2xl bg-dcard overflow-hidden group">

      <div className="relative w-full rounded-2xl">
        <div className="absolute bottom-2 z-20 w-full flex justify-between px-2">
          <Link href="#" className="bg-black/80 text-white rounded-md px-2 py-1 text-xs hover:bg-white hover:text-black font-bold">show Code</Link>
          <Link href="#" className=" bg-black/80 text-white rounded-md px-2 py-1 text-xs hover:bg-white hover:text-black font-bold">Live preview</Link>
        </div>
        <Image src="/img1.jpg" alt="img" width={400} height={200} className="rounded-2xl w-auto h-auto" />
      </div>
      <div className="bg-black/70 text-white absolute group-hover:-translate-y-52 w-full rounded-2xl p-5 duration-300 h-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus, minima, dolore officiis molestiae, perferendis nam libero veniam consequatur consequuntur magnam blanditiis iusto praesentium deserunt nobis tenetur eligendi eum sequi!
      </div>

    </article>
  );
};

export default Card;
